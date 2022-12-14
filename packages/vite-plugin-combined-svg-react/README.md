# Combined Svg React - Vite Plugin

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

In order to mark and notify Vite that an import of a folder should use the plugin, you need to add the plugin loader marker - `combined-svg-react` - at the and of the loading path with `?` delimiter.

Then the import exposes a variable `ReactComponent` that is the combined svg react components, and `EnumStruct` that is an enum map which consists of the svg files names.

```js
import {
  ReactComponent as Icon,
  EnumStruct as IconType,
} from "./assets?combined-svg-react";

export function MyComponent() {
  return <Icon iconName={IconType.UKR} />;
}
```
