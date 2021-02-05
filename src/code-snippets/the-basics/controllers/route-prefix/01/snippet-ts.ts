import { Fasteer } from "@fasteerjs/fasteer";

const HelloController: Fasteer.FCtrl = (fastify) => {
  // ...
};

// Prefixes all routes with /hello
export const routePrefix = "/hello";

export default HelloController;
