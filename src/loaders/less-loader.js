const path = require("path");
const less = require("less");

function lessLoader(lessSource) {
  const fileName = path.basename(this.resourcePath);
  console.log(`${fileName}: 执行 my-babel-loader 的normal阶段`);

  //这里看着像是异步的，其实是同步的
  less.render(lessSource, { filename: this.resource }, (err, output) => {
    css = output.css;
  });//这里less.render其实也就是把less解析成AST，然后再生成css
  return css;
}

module.exports = lessLoader;
