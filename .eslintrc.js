// link: https://eslint.vuejs.org/user-guide/#installation
// reference: https://segmentfault.com/a/1190000038533257
module.exports = {
  root: true,
  env: {
    node: true,
  },
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
    ecmaVersion: 2020,
    sourceType: "module",
    jsxPragma: "React",
    ecmaFeatures: {
      jsx: true,
      tsx: true,
    },
  },
  extends: [
    "plugin:vue/vue3-recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "plugin:prettier/recommended",
  ],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-var": ["error"],
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": ["error"],
    "comma-dangle": ["off", "never"],
    "comma-spacing": [
      "error",
      {
        before: false,
        after: true,
      },
    ],
    "prefer-const": 1,
    "space-before-function-paren": 0,
    "vue/no-parsing-error": [
      2,
      {
        "x-invalid-end-tag": false,
      },
    ],
    semi: [2, "always"],
    quotes: [2, "double"],
    "@typescript-eslint/ban-ts-ignore": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/no-empty-function": "off",
    "vue/custom-event-name-casing": "off",
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/ban-types": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/camelcase": "off",
  },
};
