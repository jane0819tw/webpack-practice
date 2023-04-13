// require('./logPlugin'); // 要用node 啟
// require('./eslintPlugin'); // 要用node 啟

// --------------用webpack啟動---------------------
const buttonEle = document.getElementById("button");

buttonEle.onclick = function () {
  import("./test").then((module) => {
    const print = module.default;
    print();
  });
};


