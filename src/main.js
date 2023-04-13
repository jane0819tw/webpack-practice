// require('./logPlugin'); // 要用node 啟
// require('./eslintPlugin'); // 要用node 啟
import "./less/index.less";

// --------------用webpack啟動---------------------
const buttonEle = document.getElementById("button");

const sum = (a, b) => a + b; //这里是个箭头函数，需要通过loader转换成普通函数
const res = sum(1, 2);
console.log(res);

buttonEle.onclick = function () {
  import("./test").then((module) => {
    const print = module.default;
    print();
  });
};

/***************** HOT RERENDER ******************/
const render = () => {
  const rootDom = document.getElementById("root");
  rootDom.innerText = rootDom.innerText + '1';
};

render();

//要实现热更新，这段代码并不可少，描述当模块被更新后做什么 
if (module.hot) {
  console.log('renderrrr....');
  render();
}


