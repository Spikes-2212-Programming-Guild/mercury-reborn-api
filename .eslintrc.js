module.exports = {
  env: {
    es6: true,
    node: true
  },
  extends: "eslint:recommended",
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  rules: {
    indent: ["error", 2],
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "double"],
    "no-unused-vars": [2, {"vars": "all", "args": "after-used"}],
    "no-console": "off",
  }
};