const HelloController = (fastify) => {
  fastify.get("/", (req, res) => res.send("Hello World"));
};

export default HelloController;
