import React from 'react';
import './App.css';
import ImportComponent from './R003_ImportComponent' 
//R003_ImportComponent.js 파일을 ImportComponent라는 이름으로 불러온다

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>CSS 적용하기</p>
      <ImportComponent></ImportComponent>
    </div>
  );
}

export default App;