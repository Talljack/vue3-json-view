// 处理vue文件插件
import vue from "rollup-plugin-vue";
// 处理ts插件
import typescript from "rollup-plugin-typescript2";
// 用于在节点单元模块中使用第三方模块
import { nodeResolve } from "@rollup/plugin-node-resolve";

import commonjs from "@rollup/plugin-commonjs";

import babel from "@rollup/plugin-babel";

import postcss from "rollup-plugin-postcss";
import cssnano from "cssnano";
import { name } from "../package.json";

const extensions = [".ts", ".js", ".tsx"];
// 输出打包后的文件名称type 1.esm 2.umd
const file = (type) => `dist/${name}.${type}.js`;
const overrides = {
  compilerOptions: { declaration: true }, // 生成.d.ts的文件
  exclude: ["tests/**/*.ts", "tests/**/*.tsx"],
};
export { name, file };
export default {
  input: "src/index.ts",
  output: {
    name,
    file: file("esm"),
    format: "es",
  },
  plugins: [
    typescript({
      extensions,
      lib: ["es5", "es6", "dom"],
      target: "es5",
      noEmitOnError: true,
    }),
    vue(),
    nodeResolve({ mainFields: ["module", "main", "browser"] }),
    commonjs({ extensions, sourceMap: true }),
    babel({ babelHelpers: "bundled", extensions }),
    postcss({
      plugins: [cssnano],
      extract: "dist/css/z-style.css", // 输出路径
    }),
  ],
  external: ["vue", "lodash-es"], // 规定哪些是外部引用的模块
};
