# Add Fasteer to your project

[[toc]]

## Quick Start

The easiest way to get started with Fasteer.js is to use the `hookFastify` function. It allows you to bootstrap
Fastify (depending on the options you pass it) and it creates a Winston instance (it's settings can be modified via the `loggerOptions` property).

<code-group>
<code-block title="TS / JS (ES6)" active>
<<< src/code-snippets/getting-started/add-fasteer-to-your-project/quick-start/01/snippet-es6.js
</code-block>

<code-block title="JS">
<<< src/code-snippets/getting-started/add-fasteer-to-your-project/quick-start/01/snippet-js.js
</code-block>
</code-group>

### Existing Fastify instance

If you wish to use an existing instance of Fastify just pass it to `hookFastify` as a second parameter.

<code-group>
<code-block title="TS / JS (ES6)" active>
<<< src/code-snippets/getting-started/add-fasteer-to-your-project/existing-fastify-instance/01/snippet-es6.js
</code-block>

<code-block title="JS">
<<< src/code-snippets/getting-started/add-fasteer-to-your-project/existing-fastify-instance/01/snippet-js.js
</code-block>
</code-group>

## Manually creating FasteerInstance

You can also create the FasteerInstance manually:

<code-group>
<code-block title="TS / JS (ES6)" active>
<<< src/code-snippets/getting-started/add-fasteer-to-your-project/manually-creating-fasteer-instance/01/snippet-es6.js
</code-block>

<code-block title="JS">
<<< src/code-snippets/getting-started/add-fasteer-to-your-project/manually-creating-fasteer-instance/01/snippet-js.js
</code-block>
</code-group>