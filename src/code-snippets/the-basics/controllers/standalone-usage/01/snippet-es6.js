import { useControllers } from "@fasteerjs/fasteer";
import fastify from "fastify";

const app = fastify();

useControllers(
  {
    controllers: [
      // ... register controllers the same way you would in hookFastify
    ],
  },
  app
);
