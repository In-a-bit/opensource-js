import type { RollupOptions } from "rollup";
import { defineConfig } from "rollup";
import dts from "rollup-plugin-dts";
import esbuild from "rollup-plugin-esbuild";

const name = "./dist/index";

const bundle = (config: RollupOptions): RollupOptions =>
  defineConfig({
    ...config,
    input: "src/index.ts",
    external: (id: string) => !/^([./]|(C:))/.test(id),
  });

export default [
  bundle({
    plugins: [esbuild()],
    output: [
      {
        file: `${name}.umd.js`,
        format: "cjs",
        sourcemap: true,
        interop: "auto",
      },
      {
        file: `${name}.mjs`,
        format: "es",
        sourcemap: true,
        interop: "auto",
      },
    ],
  }),
  bundle({
    plugins: [dts()],
    output: {
      file: `${name}.d.ts`,
      format: "es",
      interop: "auto",
    },
  }),
];
