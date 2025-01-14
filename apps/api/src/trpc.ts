import type { CreateFastifyContextOptions } from "@trpc/server/adapters/fastify";
import type _fastify from "fastify";
import { initTRPC, TRPCError } from "@trpc/server";
import jwt from "jsonwebtoken";
import SuperJSON from "superjson";
import { ZodError } from "zod";

import { Config } from "@mass-master/config";
import { createDatabaseConnection } from "@mass-master/db";

import { ENV } from "./env.js";

const db = createDatabaseConnection({
  host: Config.DB_HOST,
  username: Config.DB_USERNAME,
  password: Config.DB_PASSWORD,
  port: Config.DB_PORT,
});

export const createTRPCContext = async ({
  req,
  res,
}: CreateFastifyContextOptions) => {
  const getUserFromHeader = () => {
    if (req.headers.authorization) {
      const token = req.headers.authorization;

      const data = jwt.verify(token, Config.JWT_SECRET) as {
        exp: number;
        iat: number;
      };

      const expDate = new Date(data.exp * 1000).getTime();
      const curent = new Date().getTime();

      if (expDate < curent) {
        throw new TRPCError({ code: "UNAUTHORIZED" });
      }

      const user = {
        name: "admin",
      };

      return user;
    }
    return null;
  };
  const user = getUserFromHeader();

  return {
    fastify: req.server,
    db: await db,
    req,
    res,
    user,
  };
};

export type Context = Awaited<ReturnType<typeof createTRPCContext>>;

const t = initTRPC.context<Context>().create({
  transformer: SuperJSON,
  errorFormatter: ({ shape, error }) => ({
    ...shape,
    data: {
      ...shape.data,
      zodError: error.cause instanceof ZodError ? error.cause.flatten() : null,
    },
  }),
});

export const createTRPCRouter = t.router;

export const publicProcedure = t.procedure;

export const adminProcedure = t.procedure.use(async (opts) => {
  const { ctx } = opts;
  if (!ctx.user) {
    throw new TRPCError({ code: "UNAUTHORIZED" });
  }
  return opts.next({
    ctx: {
      user: ctx.user,
    },
  });
});
