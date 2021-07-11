import basicConfig, { file, name } from "./rollup.config";
export default {
  ...basicConfig,
  output: {
    name,
    file: file("esm"),
    format: "es",
  },
};
