const path = require("path");
const { scss } = require("svelte-preprocess");

module.exports = {
  preprocess: [scss({ includePaths: [path.resolve(__dirname, "src/styles")] })],
};
