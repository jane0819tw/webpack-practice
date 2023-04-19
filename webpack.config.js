const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");

// module.exports = {
//   mode: "development",
//   devtool: false, // "source-map",//查看打包后的代码更方便
//   entry: {
//     main: "./src/main.js",
//   },
//   output: {
//     filename: "main.js", //定义打包后的文件名称
//     path: path.resolve(__dirname, "./dist"), //必须是绝对路径
//   },
//   resolveLoader: {
//     modules: ['src/loaders', 'node_modules']
//   },
//   devServer: {
//     hot: true, //开启热更新，这个是关键！！！
//     port: 9000, //设置端口号
//   },
//   module: {
//     rules: [
//       // // => custom loader example
//       // {
//       //   test: /\.js$/,
//       //   use: [
//       //     'c-loader', 'b-loader', "a-loader",
//       //   ],
//       // },
//       // => babel loader example
//       {
//         test: /\.js$/,
//         use: [
//           {
//             loader: "my-babel-loader",
//             options: {
//               presets: ["@babel/preset-env"],
//             },
//           },
//         ],
//       },
//       {
//         test: /\.less$/,
//         use: [
//           "style-loader", //将css内容变成style标签插入到html中去
//           "css-loader", //一般会解析url合@import等语法
//           "less-loader", //将less=>css
//         ],
//       },
//     ]
//   },
//   plugins: [
//     new HtmlWebpackPlugin({ template: './src/index.html' })
//   ]
// };

module.exports = {
  mode: "development",
  devtool: false, // "source-map",//查看打包后的代码更方便
  entry: "./src/index.js", //入口
  output: {
    path: path.resolve(__dirname, './dist'),
    clean: true, // 會先清空dist 再打包
    filename: '[name].bundle.js',
    // filename: 'js/[name].[hash].js', // [name] : entry的key,
    // publicPath設成/，BrowserRouter才不會壞掉
    // publicPath: '/',
    // chunkFilename: '[name]-[hash].js',
  },
  // optimization: {
  //   runtimeChunk: 'single',
  // },
  module: {
    rules: [
      {
        test: /\.js?$/i,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          // plugins: ["react-hot-loader/babel"],
          presets: ["@babel/preset-env", "@babel/preset-react"],
        }
      },
    ],
  },
  devServer: {
    // hot: false, //开启热更新，这个是关键！！！
    port: 9000, //设置端口号
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src/"),
    },
    extensions: [".js", ".jsx"],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html', title: 'Development', })
  ]
};
