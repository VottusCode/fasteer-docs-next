import { Fasteer } from "@fasteerjs/fasteer";

// Fasteer.FCtrl is a shortcut for Fasteer.FunctionalController
const HelloController: Fasteer.FCtrl = (fastify) => {
  fastify.get("/", (req, res) => res.send("Hello World"));
};

export default HelloController;
