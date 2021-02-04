# Add Fasteer to your project

[[toc]]

## Quick Start

The easiest way to get started with Fasteer.js is to use the `hookFastify` function. It allows you to bootstrap
Fastify (depending on the options you pass it) and it creates a Winston instance (it's settings can be modified via the `loggerOptions` property).

<code-group>
<code-block title="TS / JS (ES6)" active>
```ts
import { hookFastify } from "@fasteerjs/fasteer";

const fasteer = hookFastify({
  controllers: [
    "./controllers/*.js"
  ]
});
```
</code-block>

<code-block title="JS">
```ts
const { hookFastify } = require("@fasteerjs/fasteer");

const fasteer = hookFastify({
  controllers: [
    "./controllers/*.js"
  ]
});
```
</code-block>
</code-group>

### Existing Fastify instance

If you wish to use an existing instance of Fastify just pass it to `hookFastify` as a second parameter.

<code-group>
<code-block title="TS / JS (ES6)" active>
```ts
import { hookFastify } from "@fasteerjs/fasteer";
import fastify from "fastify";

const app = fastify();

const fasteer = hookFastify({
  controllers: [
    "./controllers/*.js"
  ],
  port: 4200
}, app); // <-- passing Fastify instance here
```
</code-block>

<code-block title="JS">
```ts
const { hookFastify } = require("@fasteerjs/fasteer");
const fastify = require("fastify");

const app = fastify();

const fasteer = hookFastify({
  controllers: [
    "./controllers/*.js"
  ],
  port: 4200
}, app); // <-- passing Fastify instance here
```
</code-block>
</code-group>

## Manually creating FasteerInstance

You can also create the FasteerInstance manually:

<code-group>
<code-block title="TS / JS (ES6)" active>
```ts
import { FasteerInstance } from "@fasteerjs/fasteer"
import { createLogger } from "winston"
import fastify from "fastify"
 
const app = fastify();
const logger = createLogger(); // create Winston

const fasteer = new FasteerInstance(app, {
  config: {
    controllers: [
      "./controllers/*.js"
    ],
    port: 4200
  },
  logger
});
```
</code-block>

<code-block title="JS">
```ts
const { FasteerInstance } = require("@fasteerjs/fasteer")
const { createLogger } = require("winston")
const fastify = require("fastify")
 
const app = fastify();
const logger = createLogger(); // create Winston

const fasteer = new FasteerInstance(app, {
  config: {
    controllers: [
      "./controllers/*.js"
    ],
    port: 4200
  },
  logger
});
```
</code-block>
</code-group>