const { useControllers } = require("@fasteerjs/fasteer");
const fastify = require("fastify");

const app = fastify();

useControllers(
  {
    controllers: [
      // ... register controllers the same way you would in hookFastify
    ],
  },
  app
);
