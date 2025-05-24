import cors from "@fastify/cors";
import helmet from "@fastify/helmet";
import sensible from "@fastify/sensible";
import ws from "@fastify/websocket";
import { fastifyTRPCPlugin } from "@trpc/server/adapters/fastify";
import fastify, { FastifyListenOptions } from "fastify";
import SuperJSON from "superjson";
import { renderTrpcPanel } from "trpc-panel";
import { transformer } from "zod";

import { appRouter } from "./root.js";
import { createTRPCContext } from "./trpc.js";

(() => {
  const app = fastify({
    logger: {
      transport: {
        target: "pino-pretty",
      },
    },
  })
    .register(sensible)
    .register(ws)
    .register(fastifyTRPCPlugin, {
      prefix: "/trpc",
      useWSS: true,
      trpcOptions: {
        router: appRouter,
        createContext: createTRPCContext,
        transformer: SuperJSON,
      },
    })
    .register(cors, { origin: "*", credentials: true })
    .register(helmet);

  app.get("/panel", async (_, res) => {
    return res
      .header("Content-Security-Policy", "unsafe-inline")
      .header("content-type", "text/html")
      .send(
        renderTrpcPanel(appRouter, {
          url: "http://127.0.0.1:1337/trpc",
          transformer: "superjson",
        }),
      );
  });

  const options: FastifyListenOptions = { port: 1337 };

  void app.listen(options);
})();
