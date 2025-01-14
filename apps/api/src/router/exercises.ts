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
    return ex;
  }),
};
