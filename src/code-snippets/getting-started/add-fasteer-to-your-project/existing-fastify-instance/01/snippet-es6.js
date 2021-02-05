import { hookFastify } from "@fasteerjs/fasteer";
import fastify from "fastify";

const app = fastify();

const fasteer = hookFastify(
  {
    controllers: ["./controllers/*.js"],
    port: 4200,
  },
  app
); // <-- passing Fastify instance here
