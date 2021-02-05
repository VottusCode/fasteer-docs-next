import { FasteerInstance } from "@fasteerjs/fasteer";
import { createLogger } from "winston";
import fastify from "fastify";

const app = fastify();
const logger = createLogger(); // create Winston

const fasteer = new FasteerInstance(app, {
  config: {
    controllers: ["./controllers/*.js"],
    port: 4200,
  },
  logger,
});
