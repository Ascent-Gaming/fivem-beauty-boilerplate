# FiveM Beauty Boilerplate

<h3 align="center"><a href="https://preactjs.com/" target="_blank">Preact</a> and <a href="https://tailwindcss.com/" target="_blank">Tailwind</a> 🔋 NUI</h3>
<h3 align="center"><code><a href="https://github.com/d0p3t/fivem-js" target="_blank">fivem-js</a></code> 🏃‍♀️ included</h3>

---

> This boilerplate is a fork of [d0pt3's `fivem-ts-boilerplate`](https://github.com/d0p3t/fivem-ts-boilerplate). Thank-you to the responsible parties for the Webpack portion of this setup.

---

## Introduction

This boilerplate includes all that is required to begin writing resources using TypeScript, which have a [**Preact**](https://preactjs.com/) and [**TailwindCSS**](https://tailwindcss.com/) powered NUI.

- [Introduction](#introduction)
  - [Preact in-a-🌰](#preact-in-a-)
  - [Tailwind in-a-🌰](#tailwind-in-a-)
- [Examples](#examples)
- [What's Next?](#whats-next)
- [Usage](#usage)
  - [NPM Scripts](#npm-scripts)
    - [`build`](#build)
    - [`build:nui`](#buildnui)
    - [`build:script`](#buildscript)
    - [`watch`](#watch)
    - [`watch:nui`](#watchnui)
    - [`watch:script`](#watchscript)
    - [`format`](#format)
    - [`link`](#link)
- [Deployment](#deployment)
- [License](#license)

> If you do not require the functionality of Preact and Tailwind, i.e. you just want to write a TypeScript resource-no UI, consider the [`fivem-ts-boilerplate`](https://github.com/d0p3t/fivem-ts-boilerplate) instead.

> I'm assuming you are already familiar with Preact/React and Tailwind. Both are very easy to start using if you're already familiar with JavaScript and how CSS styling traditionally works.

> It's highly recommended you use [VSCode](https://code.visualstudio.com/) and the [PostCSS Language Support](https://marketplace.visualstudio.com/items?itemName=csstools.postcss) and [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) extensions. The will be recommended for installation when you first open the project in VSCode.

> The VSCode status-bar customizations can be disabled/configured in `./.vscode/settings.json`

### Preact in-a-🌰

[Preact](https://preactjs.com/) is a minifed, alternative version of [React](https://reactjs.org/). It provides everything necessary to begin writing reusable, component based applications-or NUIs.

Using [Functional Components](https://preactjs.com/guide/v10/components#functional-components) and [Hooks](https://preactjs.com/guide/v10/hooks), you can quickly write reactive user interfaces. [Class Components](https://preactjs.com/guide/v10/components#class-components), should, work; though I haven't tested them personally.

Looking at the NUI source, you may notice the unique way in which Preact's components are written:

```JavaScript
const _Template = ({ children }) => {
  return (
    html`
      <div class=${_TemplateClasses}>
        ${children}
      </div>
    `
  )
}
```

This is known as [Hyperscript Tagged Markup](https://github.com/developit/htm), and is a way to write components in a JSX-like way while using nothing but [template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals).

Preact has more information [in their documentation](https://preactjs.com/guide/v10/getting-started#alternatives-to-jsx).

> `src/html/components/_template.js` exists as a reference for building your own Preact-components. Remember to keep the [Hooks reference](https://preactjs.com/guide/v10/hooks) on-hand as they're a great way to keep all NUI functionality within the UI.

### Tailwind in-a-🌰

[TailwindCSS](https://tailwindcss.com/) is a "utility-first" CSS framework for building applications composed of highly-reusable and customizable utility `classes`.

It makes a great pairing for Preact, as it lets you write reusable components with styles baked into the components markup. Its [Core Concepts](https://tailwindcss.com/docs/utility-first) section provides a more in-depth explanation.

## Examples

* [`src/client/client.ts`](src/client/client.ts) provides an example for displaying/hiding the NUI frontend.
* [`src/server/server.ts`](src/server/server.ts) provides a command for toggling the example UI.
* [`src/html/components/render.js`](src/html/components/render.js) is a ready-to-use component for actively toggling a Preact "application" based on input a client-script.
* [`src/html/app.js`](src/html/app.js) is a minimal Preact "application" which contains a single component, [`Dashboard`](src/html/pages/dashboard.js)
* [`src/html/styles/style.css`](src/html/styles/style.css) is the entry-point for TailwindCSS integration, building, and watching.

## What's Next?

~Create~, expand, and promote [`fivem_beauty_components`](https://github.com/Ascent-Gaming/fivem_beauty_components), a component-library made to compliment this boilerplate, built using it.

Improve build process; instead of splitting the resource in `./dist/` and the NUI in `./src/html/`, copy the needed files from `./src/html/` to `./dist/`.

## Usage

1) You'll want to `"Use this template"` to create your own repository.
2) `git clone` your newly created repository onto your local-machine.
3) Enter the cloned directory and run `npm install` to get all dependencies.
4) You should now be ready to begin writing your resource. See the following section for information on the various `scripts` which make using the boilerplate easier.

### NPM Scripts

#### `build`

Builds both the `script` and `nui` sides of the resource.

This command is used to build a production-ready version of your resource.

#### `build:nui`

Uses [`PostCSS`](https://postcss.org/) to generate `styles` based on the contents of your resource's `src/html/` directory.

This process is what provides your NUI all Tailwind styling, and is ran with `NODE_ENV=production` to optimize generated stylesheets.

> You can alter the [`purging`](https://tailwindcss.com/docs/optimizing-for-production) of Tailwind styling by editing `./tailwind.config.js`.

#### `build:script`

Uses [`Webpack`](https://webpack.js.org/) to bundle and envoke transpiliation of the resource's TypeScript source. Is ran with `--mode production`.

#### `watch`

Watches both the `script` and `nui` sides of the resources, re-bundling/generating them if any changes are detected.

#### `watch:nui`

Uses `PostCSS` to watch the `nui` side of the resource; this process mainly exists to generate a development-version of Tailwind, which includes *all* stylings to improve DX while creating your UI.

> Altering any JS or HTML files for your NUI simply require a `restart` in the FiveM console.

#### `watch:script`

Uses `Webpack` to bundle the `script` anytime changes are detected.

#### `format`

Use [`Prettier`](https://prettier.io/) to format all TypeScript source code.

#### `link`

Use [`ESLint`](https://eslint.org/) to lint all TypeScript source code.

## Deployment

All you need for "deploying" this resource to a server-environment is the `./dist/` and `./src/html/` directories, along with the `fxmanifest.lua` configuration.

The configuration in `fxmanifest` will ensure only the `dist` stylesheet is sent to the client.

## License
This product is MIT licensed. Please make sure you give credit and include this license in your product.
