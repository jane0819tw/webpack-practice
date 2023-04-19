import React, { useState, useEffect } from "react";
import TestA from '@/components/TestA';
import TestB from '@/components/TestB';

const UserManagement = ({ history }) => {
  const [parentValue, setParentValue] = useState(0);
  const changeValue = () => {
    setParentValue(prev => prev + 1);
  };
  const nextPage = () => {
    history.push('/user-management/detail');
  }
  useEffect(() => {
    // console.log(`==>props`);
    // console.log(props);
  }, []);
  return <div>
    <h3>這是 UserManagement 頁面 parent的值: {parentValue}</h3>
    <button onClick={() => changeValue()}>change parent</button>
    <TestA />
    <TestB />
    <button onClick={() => nextPage()}>GO UserDetail</button>
  </div>
};
export default UserManagement;
