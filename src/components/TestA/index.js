import React, { useState } from "react";


const TestA = () => {
  const [childValue, setChildValue] = useState(0);
  const NAME = 'TestA';
  const changeValue = () => {
    setChildValue(prev => prev + 1);
  };
  return <div>
    <p>這是{NAME} component 的值: {childValue}</p>
    <button onClick={() => changeValue()}>change {NAME} </button>
  </div>
};

export default TestA;
