/* eslint-disable @typescript-eslint/no-var-requires */
const globImport = require("rollup-plugin-glob-import");
const resolve = require("@rollup/plugin-node-resolve");
const commonjs = require("@rollup/plugin-commonjs");
const typescript = require("@rollup/plugin-typescript");
const dts = require("rollup-plugin-dts");
const postcss = require("rollup-plugin-postcss");

const packageJson = require("./package.json");

module.exports = [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      resolve(),
      commonjs(),
      typescript({tsconfig: "./tsconfig.json"}),
      postcss(),
      globImport({
        exclude: ["**/front/**/*.ts", "**/__tests__/**", "**/*.test.tsx", "**/*.spec.tsx"],
      }),
    ],
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [{file: "dist/index.d.ts", format: "esm"}],
    plugins: [dts.default()],
    external: [/\.css$/, /\.scss$/, /\.test.tsx$/],
  },
];
