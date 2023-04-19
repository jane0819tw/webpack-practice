import React, { useState, useEffect } from "react";
import TestA from '@/components/TestA';
import TestB from '@/components/TestB';

const UserDetail = ({ history }) => {
  const [parentValue, setParentValue] = useState(0);
  const changeValue = () => {
    setParentValue(prev => prev + 1);
  };
  const nextPage = () => {
    history.push('/');
  }
  useEffect(() => {
    // console.log(`==>props`);
    // console.log(props);
  }, []);
  return <div>
    <h3>這是 UserDetail 頁面  parent 的值: {parentValue}</h3>
    <button onClick={() => changeValue()}>change parent</button>
    <TestA />
    <TestB />
    <button onClick={() => nextPage()}>GO App.js</button>
  </div>
};
export default UserDetail;
