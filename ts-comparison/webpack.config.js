const path = require("path");

module.exports = {
  module: {
    resolve: ["shared", path.resolve(__dirname, "./src"), "node_modules"]
  }
};
