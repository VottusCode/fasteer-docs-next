const { hookFastify } = require("@fasteerjs/fasteer");

// Create a Fasteer Instance
const fasteer = hookFastify({
  controllers: ["./controllers/*.js"],
});

fasteer.start();
