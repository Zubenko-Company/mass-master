import { exercises } from "./router/exercises.js";
import { token } from "./router/token.js";
import { createTRPCRouter } from "./trpc.js";

export const appRouter = createTRPCRouter({
  token: createTRPCRouter(token),
  exercises: createTRPCRouter(exercises),
});

// export type definition of API
export type AppRouter = typeof appRouter;
