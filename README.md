<h1 align="center">fivem-ts-preact</h1>

<p align="center">
  <i>:fire: A Typescript Boilerplate for FiveM with a Preact-powered NUI :video_game:</i>
  <br>
  <br>
  <a href="https://github.com/Ascent-Gaming/fivem-ts-preact/blob/master/LICENSE">
    <img src="https://img.shields.io/badge/License-MIT-blue.svg?style=flat" alt="License: MIT">
  </a>
  <a href="https://github.com/Ascent-Gaming/fivem-ts-preact/commits/master">
    <img src="https://img.shields.io/github/last-commit/Ascent-Gaming/fivem-ts-preact.svg?style=flat" alt="Last commit">
  </a>
  <a href="">
    <img src="https://img.shields.io/github/workflow/status/Ascent-Gaming/fivem-ts-preact/Node.js%20CI" alt="Workflow">
  </a>
</p>

> This boilerplate is based on [d0pt3's `fivem-ts-boilerplate`](https://github.com/d0p3t/fivem-ts-boilerplate).

> A [Preact](https://preactjs.com/) NUI has been added which, by default, has no configuration and comes with [Bootstrap v5](https://getbootstrap.com/). You are responsible for adding `show`/`hide` logic, replacing/removing Bootstrap, etc.

This is a basic boilerplate for creating a FiveM resource using Typescript. It includes webpack config files, linting (ESlint + prettier) and a directory structure to get you started. We recommend to use [fivem-js](https://github.com/d0p3t/fivem-js) alongside this boilerplate for faster development of client scripts.

## Usage
1. Clone repository into your `resources/[local]` folder.
2. `npm i` the dependencies.
3. Start development.

### Preact

No additional steps need to be taken to begin using Preact. See `src/html/` for an example.

***Note:*** It's recommended you use the [`lit-html`](https://marketplace.visualstudio.com/items?itemName=bierner.lit-html) VSCode extension, or similar for another editor.

### Bootstrap

By default, the UI will provide Bootstrap. This means you're free to start making NUI's using the full power of Bootstrap v5.

> Customization for Bootstrap will come at a later date. In short, in involves adding the Bootstrap SCSS source files and setting up SASS to compile these files to CSS. This process can be made-easy by hooking into the `watch` command, i.e. by using [`concurrently`](https://www.npmjs.com/package/concurrently), to compile changes to the directory your custom SCSS resides as you make them.

### Development
Use `npm run watch` to watch files during development.

### Production
Build your production ready code with `npm run build`.

This will build the client and server script with the `--mode production` flag.

### Automatic Builds (Optional)
The `fxmanifest.lua` is not setup to automatically build upon first FXServer start. If you'd like to setup automatic builds you must add the following to your `fxmanifest.lua`.

```lua
dependency 'yarn'
dependency 'webpack'

webpack_config 'webpack.config.js'
```

However, due to the speed performance of the pre-packaged webpack/yarn of cfx-server-data, we suggest you don't do this and build manually as described previously ("Production").

## License
This product is MIT licensed. Please make sure you give credit and include this license in your product.
