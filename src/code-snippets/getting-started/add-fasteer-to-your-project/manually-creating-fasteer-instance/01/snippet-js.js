const { FasteerInstance } = require("@fasteerjs/fasteer");
const { createLogger } = require("winston");
const fastify = require("fastify");

const app = fastify();
const logger = createLogger(); // create Winston

const fasteer = new FasteerInstance(app, {
  config: {
    controllers: ["./controllers/*.js"],
    port: 4200,
  },
  logger,
});
