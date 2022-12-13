# Combined Svg React - Vite Plugin

** ALPHA STAGE **

A Vite plugin for loading multiple svg files in a directory and combine then to one React component.

Package is published to [NPM](https://www.npmjs.com/package/@inabit/vite-plugin-combined-svg-react)

## Usage

Install plugin and the peer dependency.

```shell
pnpm add @inabit/vite-plugin-combined-svg-react
pnpm add vite-plugin-svgr
```

Config vite to use the plugin.

```js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import combinedSvgReact from "@inabit/vite-plugin-combined-svg-react";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [svgr(), react(), combinedSvgReact()],
});
```

In the code you need to import the folder as a component like in the following example.

```js
import {
  ReactComponent as Icon,
  EnumStruct as IconType,
} from "./assets?svg-list-to-switcher";

export function MyComponent() {
  return <Icon iconName="UKR" />;
}
```
