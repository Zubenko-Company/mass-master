import { adminProcedure } from "../trpc.js";

export const users = {
  all: adminProcedure.query(async ({ ctx }) => {
    const users = await ctx.db.Users.find();
    return users;
  }),
};
