import type { Plugin } from "vite";
//@ts-ignore
import { generateCombinedIconsComponentCode } from "./generateCombinedIconsComponentCode";
import * as path from "path";
import { extractFileName } from "./extractFileName";

export function combinedIconsSvgrPlugin(): Plugin {
  return {
    name: "svg-list-to-switcher",
    resolveId(source: string) {
      if (isPluginFolder(source)) {
        let newSource =
          path.resolve(".") +
          `${path.sep}src${path.sep}assets.tsx?svg-list-to-switcher`;
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
  const regex = new RegExp("\\?svg-list-to-switcher$");
  return regex.test(id);
}
