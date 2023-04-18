import React, { useState } from "react";
import TestA from '@/components/TestA/TestA';
import TestB from '@/components/TestB/TestB';

const App = () => {
  const [parentValue, setParentValue] = useState(0);
  const changeValue = () => {
    setParentValue(prev => prev + 1);
  };
  return <div>
    <h3>這是App.js parent 的值: {parentValue}</h3>
    <button onClick={() => changeValue()}>change parent</button>
    <TestA />
    <TestB />
  </div>
};
export default App;
