import React from 'react';
import './App.css';
import LifecycleEx from './R005_LifecycleEx' //부모 컴포넌트 = 다른 파일에서 import해서 사용하는 쪽

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>CSS 적용하기</p>
      <LifecycleEx></LifecycleEx>
    </div>
  );
}

export default App;