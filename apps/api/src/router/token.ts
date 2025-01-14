import { TRPCError } from "@trpc/server";
import jwt from "jsonwebtoken";
import { z } from "zod";

import { Config } from "@mass-master/config";

import { User } from "../../../../packages/db/src/entities/user.js";
import { ENV } from "../env.js";
import { publicProcedure } from "../trpc.js";

export const token = {
  token: publicProcedure
    .input(z.object({ login: z.string(), password: z.string() }))
    .mutation(({ input }) => {
      if (
        input.login === ENV.adminLogin &&
        input.password === ENV.adminPassword
      ) {
        const jwtSecret = Config.JWT_SECRET;

        const token = jwt.sign(
          { exp: Math.floor(Date.now() / 1000) + 60 * 60 },
          jwtSecret,
        );
        return { jwt: token };
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
    .mutation(({ input, ctx }) => {
      const user = new User();

      user.name = input.name;
      user.login = input.login;
      user.password = input.password;

      ctx.db.User.save(user);
      return {};
    }),
};
