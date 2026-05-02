import React, { Component } from 'react';
import datatype from 'prop-types';

class R018_PropsDatatype extends Component {
    // 자식 컴포넌트에서 props에 대한 자료형을 선언해놓으면, 부모 컴포넌트에서 넘어오는 props 변수들의 자료형과 비교함
    // 이때 자료형이 일치하지 않으면 경고메세지로 알려줌
    render() {
        let {
            String, Number, Boolean, Array, ObjectJson, Function
        } = this.props
        return ( 
            <div style={{padding: "0px"}}>
                <p>StringProps: {String}</p>
                <p>NumberProps: {Number}</p>
                <span>BooleanProps: {Boolean.toString()}</span>
                <p>ArrayProps: {Array.toString()}</p>
                <p>ObjectJsonProps: {JSON.stringify(ObjectJson)}</p>
                <p>FunctionProps: {Function}</p>
            </div>
        )
    }
}

R018_PropsDatatype.propTypes = {
    String: datatype.number, //교재랑 다르게 react 버전때문에 콘솔 경고가 출력 안됨
    Number: datatype.number,
    Boolean: datatype.bool,
    Array: datatype.array,
    ObjectJson: datatype.object,
    //Object Json: datatype.object, - 교재는 이렇게 작성 되어있는데 JS 객체 키 이름에는 공백 불가 에러 발생 (Syntax Error)
    Function: datatype.func,
}

export default R018_PropsDatatype;