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

module.exports = styleLoader;
