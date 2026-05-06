import React, { Component } from 'react';
import datatype from 'prop-types';

class R021_PropsRequired extends Component {
    // 
    render() {
        let {
            ReactString,
            ReactNumber
        } = this.props // 지역변수 선언 후 props로 전달된 값 할당
        return ( 
            <div style={{padding: "0px"}}>
                {ReactString}{ReactNumber} 
                {/*상위 컴포넌트에서는 ReactString의 값을 전달하지않음. 원래는 콘솔창에서 에러나야하는데 상위 버전이라 에러가 나지않음.*/}
            </div>
        )
    }
}

R021_PropsRequired.protoTypes = {
    ReactString: datatype.isRequired,
}
//props의 자료형 선언 시, 자료형 설정 대신 isRequired를 조건으로 추가하면 변수값 없는 경우 경고메세지 발생할 수 있음
//현재 상위 컴포넌트에서는 ReactString의 값을 전달하지않음
//원래는 콘솔창에서 에러나는 모습이 보이는게 정상이지만(화면은 정상), 현재 react가 상위 버전이라 에러가 나지않는 중

export default R021_PropsRequired;