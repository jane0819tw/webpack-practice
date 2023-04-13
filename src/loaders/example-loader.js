const path = require("path");

function exampleLoader(exampleSource) {
  const fileName = path.basename(this.resourcePath);
  console.log(`${fileName}: 执行 example-loader 的normal阶段`);

  /********* YOUR CODE HERE ***********/
  // const result = {};
  // return result;
  /********* MUST return something ***********/
}

module.exports = exampleLoader;
