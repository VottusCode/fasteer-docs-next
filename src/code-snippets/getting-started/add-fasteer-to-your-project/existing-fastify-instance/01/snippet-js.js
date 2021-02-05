const { hookFastify } = require("@fasteerjs/fasteer");
const fastify = require("fastify");

const app = fastify();

const fasteer = hookFastify(
  {
    controllers: ["./controllers/*.js"],
    port: 4200,
  },
  app
); // <-- passing Fastify instance here
