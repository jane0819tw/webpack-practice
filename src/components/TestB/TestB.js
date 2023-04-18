import React, { useState } from "react";
import { hot } from 'react-hot-loader/root';


const TestB = () => {
  const [childValue, setChildValue] = useState(3);
  const NAME = 'TestB';
  const changeValue = () => {
    setChildValue(prev => prev + 1);
  };
  return <div>
    <p>這是 {NAME}  component 的值: {childValue}</p>
    <button onClick={() => changeValue()}>change {NAME} </button>
  </div>
};
// export default TestB;
export default hot(TestB);
