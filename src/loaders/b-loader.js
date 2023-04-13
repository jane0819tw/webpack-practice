const path = require('path');
function BLoader(content, map, meta) {
  const fileName = path.basename(this.resourcePath);
  console.log(`${fileName}: 执行 b-loader 的normal阶段`);
  return content + "//给你加点注释(来自于Bloader)";
}

BLoader.pitch = function (remainingRequest, previousRequest, data) {
  console.log(remainingRequest)
  console.log(previousRequest)
  console.log(data)
  const fileName = path.basename(this.resourcePath);
  console.log(`${fileName}: BLoader的pitch阶段`);
};
module.exports = BLoader;
