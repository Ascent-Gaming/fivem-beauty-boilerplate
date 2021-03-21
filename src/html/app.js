import { html, render } from 'https://unpkg.com/htm/preact/index.mjs?module'

import Render from "./components/render.js"

import Dashboard from "./pages/dashboard.js"

const App = () => (
  html`
    <${Render}>
      <div class="w-full h-full">
        <${Dashboard} />
      </div>
    <//>
  `
)

render(html`<${App} />`, document.getElementById('render'))
