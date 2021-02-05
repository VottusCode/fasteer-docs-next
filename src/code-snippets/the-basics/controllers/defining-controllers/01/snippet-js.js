const { ctrl } = require("@fasteerjs/fasteer");

// Not using arrow functions to give the controller a name,
// otherwise Fasteer would name it "(anonymous controller)"
module.exports = ctrl(function HelloController(fastify) {
  fastify.get("/", (req, res) => res.send("Hello World"));
});
