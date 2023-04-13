const path = require('path');
function CLoader(content, map, meta) {
  const fileName = path.basename(this.resourcePath);
  console.log(`${fileName}: 执行 c-loader 的normal阶段`);
  return content + "//给你加点注释(来自于Cloader)";
}

CLoader.pitch = function () {
  const fileName = path.basename(this.resourcePath);
  console.log(`${fileName}: CLoader的pitch阶段`);
};
module.exports = CLoader;
