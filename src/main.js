// require('./logPlugin'); // 要用node 啟
// require('./eslintPlugin'); // 要用node 啟

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


