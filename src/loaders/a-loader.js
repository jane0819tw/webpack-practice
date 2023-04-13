const path = require('path');

function ALoader(content, map, meta) {
  const fileName = path.basename(this.resourcePath);
  console.log(`${fileName}: 执行 a-loader 的normal阶段`);
  return content + "//给你加点注释(来自于Aloader)";
}

ALoader.pitch = function (remainingRequest, previousRequest, data) {
  const fileName = path.basename(this.resourcePath);
  console.log(`${fileName}: ALoader的pitch阶段`);
};
module.exports = ALoader;
