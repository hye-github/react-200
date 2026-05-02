import React from 'react';
import './App.css';
import PropsDatatype from './R018_PropsDatatype'

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>CSS 적용하기</p>
      <PropsDatatype 
        String="react"
        Number={200}
        Boolean={1==1}
        Array={[0, 1, 8]}
        ObjectJson={{react:"리액트", twohundred:"200"}}
        // Object Json={{react:"리액트", twohundred:"200"}}, - 교재는 이렇게 작성 되어있는데 JS 객체 키 이름에는 공백 불가 에러 발생 (Syntax Error)
        Function={console.log("FunctionProps: function!")}
      />
    </div>
  );
}

export default App;