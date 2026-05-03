import React, { Component } from 'react';

class R019_PropsBoolean extends Component {
    // props 값을 Boolean형으로 하위 컴포넌트에 전달할 경우 true나 false 중 하나를 할당함
    // props 변수를 선언한 후 값을 할당 안하고 넘기면 기본값은 true
    render() {
        let {
            BooleanTrueFalse
        } = this.props // 지역변수 선언 후 props로 전달된 값 할당
        return ( 
            <div style={{padding: "0px"}}>
                {BooleanTrueFalse ? '2. ' : '1. '}
                {BooleanTrueFalse.toString()}
            </div>
        )
    }
}

export default R019_PropsBoolean;