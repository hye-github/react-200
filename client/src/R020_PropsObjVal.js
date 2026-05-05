import React, { Component } from 'react';
import datatype from 'prop-types';

class R020_PropsObjVal extends Component {
    // props 값을 객체로 하위 컴포넌트에 전달할 경우 자료형을 object로 선언
    // but, 객체 형태(객체 내부 변수들)의 자료형을 선언할 때는 shape 라는 유형을 사용
    render() {
        let {
            ObjectJson
        } = this.props // 지역변수 선언 후 props로 전달된 값 할당
        return ( 
            <div style={{padding: "0px"}}>
                {JSON.stringify(ObjectJson)}
            </div>
        )
    }
}

R020_PropsObjVal.protoTypes = {
    ObjectJson: datatype.shape({ 
        react: datatype.string,
        twohundred: datatype.number
    })
}

export default R020_PropsObjVal;