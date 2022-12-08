import dts from "rollup-plugin-dts";
import esbuild from "rollup-plugin-esbuild";

const name = "index";

const bundle = (config) => ({
  ...config,
  input: "src/index.ts",
  external: (id) => !/^([./]|(C:))/.test(id),
});

export default [
  bundle({
    plugins: [
      esbuild(),
    ],
    output: [
      {
        file: `${name}.umd.js`,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: `${name}.mjs`,
        format: "es",
        sourcemap: true,
      },
    ],
  }),
  bundle({
    plugins: [dts()],
    output: {
      file: `${name}.d.ts`,
      format: "es",
    },
  }),
];