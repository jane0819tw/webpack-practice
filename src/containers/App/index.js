import React, { useState, useEffect } from "react";
import TestA from '@/components/TestA/index';
import TestB from '@/components/TestB/index';

const App = ({ history }) => {
  const [parentValue, setParentValue] = useState(0);
  const changeValue = () => {
    setParentValue(prev => prev + 1);
  };
  const nextPage = () => {
    history.push('/user-management');
  }
  useEffect(() => {
    // console.log(`==>props`);
    // console.log(props);
  }, []);
  return <div>
    <h3>這是App.js parent 的值: {parentValue}</h3>
    <button onClick={() => changeValue()}>change parent</button>
    <TestA />
    <TestB />
    <button onClick={() => nextPage()}>GO UserManagement</button>
  </div>
};
// export default hot(App);
export default App;
