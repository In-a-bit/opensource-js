import type { Plugin } from "vite";
//@ts-ignore
import { generateCombinedIconsComponentCode } from "./generateCombinedIconsComponentCode";
import * as path from "path";
import { extractFileName } from "./extractFileName";

const PLUGIN_NAME = "combined-svg-react";
const PLUGIN_LOADER_MARK = "combined-svg-react";

export function combinedIconsSvgrPlugin(): Plugin {
  return {
    name: PLUGIN_NAME,
    resolveId(source: string) {
      if (isPluginFolder(source)) {
        let newSource =
          path.resolve(".") +
          `${path.sep}src${path.sep}assets.tsx?${PLUGIN_LOADER_MARK}`;
        return newSource;
      }

      return null;
    },

    async load(id) {
      if (!isPluginFolder(id)) {
        return null;
      }

      const sourcePath = extractFileName(id);

      const source = await generateCombinedIconsComponentCode(sourcePath);

      return {
        code: source,
        map: null,
      };
    },
  };
}

function isPluginFolder(id: string) {
  const regex = new RegExp(`\\?${PLUGIN_LOADER_MARK}$`);
  return regex.test(id);
}
