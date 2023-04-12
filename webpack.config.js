const path = require('path');
// module.exports = {
//   mode: "development", //防止代码压缩
//   entry: "./src/main.js",
//   devtool: "source-map",//查看打包后的代码更方便
// };

module.exports = {
  mode: "development",
  devtool: false, // "source-map",//查看打包后的代码更方便
  entry: {
    main: "./src/main.js",
  },
  output: {
    filename: "main.js", //定义打包后的文件名称
    path: path.resolve(__dirname, "./dist"), //必须是绝对路径
  },
};