import React, { useState } from "react";

const TestB = () => {
  const [childValue, setChildValue] = useState(0);
  const NAME = 'TestB';
  const changeValue = () => {
    setChildValue(prev => prev + 1);
  };
  return <div>
    <p>這是{NAME} component的值: {childValue}</p>
    <button onClick={() => changeValue()}>change {NAME} </button>
  </div>
};
export default TestB;
