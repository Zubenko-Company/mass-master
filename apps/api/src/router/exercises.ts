import { TRPCError } from "@trpc/server";

import { adminProcedure } from "../trpc.js";

const ex = [
  {
    id: 1,
    name: "Нижняя тяга",
    value: 90,
  },
  {
    id: 2,
    name: "Верхнчя тяга",
    value: 30,
  },
];

export const exercises = {
  userExercises: adminProcedure.query(async ({ ctx }) => {
    const user = await ctx.db.User.findOneBy({ id: ctx.user.userID });
    if (!user) {
      throw new TRPCError({ code: "UNAUTHORIZED" });
    }
    // const stack = user.stack.;
    // console.log(stack);

    return {};
  }),
};
