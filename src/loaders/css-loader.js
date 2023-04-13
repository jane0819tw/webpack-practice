const path = require("path");

function cssLoader(cssSource) {
  const fileName = path.basename(this.resourcePath);
  console.log(`${fileName}: 执行 css-loader 的normal阶段`);

  /********* YOUR CODE HERE ***********/
  // return cssSource;
  return `module.exports=${JSON.stringify(cssSource)}`;
  /********* MUST return something ***********/
}

cssLoader.pitch = function () {
  const fileName = path.basename(this.resourcePath);
  console.log(`${fileName}: 执行 css-loader 的pitch阶段`);
  /********* DO SOMETHING HERE ***********/
};

module.exports = cssLoader;