import basicConfig, { name, file } from "./rollup.config";
export default {
  ...basicConfig,
  output: {
    name: "thComponents",
    file: file("umd"),
    format: "umd",
    globals: {
      // 设定全局变量的名称
      vue: "Vue",
      "lodash-es": "_",
    },
    exports: "named",
  },
};
