import { hookFastify } from "@fasteerjs/fasteer";

// Create a Fasteer Instance
const fasteer = hookFastify({
  controllers: ["./controllers/*.js"],
  port: 4200,
});

// Start the server
fasteer.start();
