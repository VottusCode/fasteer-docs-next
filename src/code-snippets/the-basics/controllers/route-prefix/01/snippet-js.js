const { ctrl } = require("@fasteerjs/fasteer");

module.exports = ctrl(function HelloController(fastify) {
  // ...
}, "/hello"); // Prefixes all routes with /hello
