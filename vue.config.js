const webpack = require("webpack");
const path = require("path");

module.exports = {
  chainWebpack: config => {
    // 配置项目常用目录引入别名
    config.resolve.alias
      .set("@components", path.resolve(__dirname, "./src/components"))
      .set("@assets", path.resolve(__dirname, "./src/assets"));

    // vue项目引入 jquery
    config.plugin("provide").use(webpack.ProvidePlugin, [{
      $: "jquery",
      jquery: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery"
    }]);
  }
};
