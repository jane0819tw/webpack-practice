const path = require("path");

function cssLoader(cssSource) {
  const fileName = path.basename(this.resourcePath);
  console.log(`${fileName}: 执行 css-loader 的normal阶段`);

  /********* YOUR CODE HERE ***********/
  return cssSource;
  /********* MUST return something ***********/
}

module.exports = cssLoader;