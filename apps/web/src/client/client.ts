import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import SuperJSON from "superjson";

import { AppRouter } from "@mass-master/api";
import { Config } from "@mass-master/config";

export const trpcClient = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: `http://${Config.SERVER_DOMAIN}:${Config.SERVER_PORT}/trpc/`,
      async headers() {
        return {
          authorization: localStorage.getItem("token") ?? "",
        };
      },
    }),
  ],
  transformer: SuperJSON,
});
