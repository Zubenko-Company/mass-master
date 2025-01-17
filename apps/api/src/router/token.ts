import crypto from "crypto";
import { TRPCError } from "@trpc/server";
import jwt from "jsonwebtoken";
import { z } from "zod";

import { Config } from "@mass-master/config";

import { User } from "../../../../packages/db/src/entities/user.js";
import { publicProcedure } from "../trpc.js";

const hashString = (data: string) => {
  return crypto.createHash("md5").update(data).digest("hex");
};

export const token = {
  token: publicProcedure
    .input(z.object({ login: z.string(), password: z.string() }))
    .mutation(async ({ input, ctx }) => {
      const users = await ctx.db.User.findBy({ login: input.login });

      if (users.length > 1 || !users.length) {
        throw new TRPCError({ code: "UNAUTHORIZED" });
      }

      if (users.length) {
        const [user] = users;
        if (user?.password === hashString(input.password)) {
          const jwtSecret = Config.JWT_SECRET;
          const token = jwt.sign(
            { exp: Math.floor(Date.now() / 1000) + 60 * 60, userId: user.id },
            jwtSecret,
          );
          return { jwt: token };
        }
      }

      throw new TRPCError({ code: "UNAUTHORIZED" });
    }),

  register: publicProcedure
    .input(
      z.object({
        login: z.string().min(5),
        password: z.string().min(5),
        name: z.string().min(2),
      }),
    )
    .mutation(async ({ input, ctx }) => {
      if ((await ctx.db.User.findBy({ name: input.name })).length) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "name already taken",
        });
      }

      const user = new User();

      user.name = input.name;
      user.login = input.login;
      user.password = hashString(input.password);

      ctx.db.User.save(user);
      return { result: "👍" };
    }),
};
