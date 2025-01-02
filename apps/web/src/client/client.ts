import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import SuperJSON from "superjson";

import { AppRouter } from "@mass-master/api";

export const trpcClient = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: "http://127.0.0.1:1337/trpc/",
    }),
  ],
  transformer: SuperJSON,
});
