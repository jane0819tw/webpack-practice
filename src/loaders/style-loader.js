const path = require("path");

function styleLoader(styleSource) {
  const fileName = path.basename(this.resourcePath);
  console.log(`${fileName}: 执行 style-loader 的normal阶段`);

  /********* YOUR CODE HERE ***********/
  let script = `
    let style = document.createElement('style');
    style.innerHTML = ${JSON.stringify(styleSource)};
    document.head.appendChild(style);
  `;
  return script;
  /********* MUST return something ***********/
}

styleLoader.pitch = function () {
  const fileName = path.basename(this.resourcePath);
  console.log(`${fileName}: 执行 less-loader 的pitch阶段`);
  /********* DO SOMETHING HERE ***********/
  let script = `
    let style=document.createElement("style");
    style.innerHTML=require("!!../loaders/css-loader.js!../loaders/less-loader.js!./index.less");
    document.head.appendChild(style)
  `;
  return script;
};

module.exports = styleLoader;
