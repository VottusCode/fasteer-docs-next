// ... imports

const fasteer = hookFastify({
  controllers: [
    "./HelloController.ts", // to register HelloController.ts
    "./controllers/*.ts", // to register all .ts files in the controllers folder
  ],
});
