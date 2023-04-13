const babel = require("@babel/core");
const path = require("path");

function babelLoader(source) {
  const fileName = path.basename(this.resourcePath);
  console.log(`${fileName}: 执行 my-babel-loader 的normal阶段`);
  //loade里面的this=loaderContext，是一个唯一的对象，不管在哪个loader或方法里，它的this都是同一个对象，称为loaderContext，这个等会就会实现
  const options = this.getOptions(); //拿到在webpack中传递给该loader的参数，也就是presets: ["@babel/preset-env"],
  const { code } = babel.transformSync(source, options); //交给babel库去解析轉換成可以懂的js
  return code;
}

module.exports = babelLoader;
