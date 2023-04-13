const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
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
  resolveLoader: {
    modules: ['src/loaders', 'node_modules']
  },
  module: {
    rules: [
      // => custom loader example
      {
        test: /\.js$/,
        use: [
          'c-loader', 'b-loader', "a-loader",
        ],
      },
      // => babel loader example
      {
        test: /\.js$/,
        use: [
          {
            loader: "my-babel-loader",
            options: {
              presets: ["@babel/preset-env"],
            },
          },
        ],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html' })
  ]
};