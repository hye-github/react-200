import React, { Component } from 'react';

class R022_PropsDefault extends Component {
    render() {
        let {
            ReactString,
            ReactNumber
        } = this.props // 지역변수 선언 후 props로 전달된 값 할당
        return ( 
            <div style={{padding: "0px"}}>
                {ReactString}{ReactNumber}
            </div>
        )
    }
}

// props의 기본값은 부모 컴포넌트에서 값이 넘어오지 않을 때 사용
// defaultProps 라는 문법 사용
R022_PropsDefault.defaultProps = {
    ReactString: "리액트",
    ReactNumber: 400 //부모 컴포넌트의 값인 200 사용됨
}

export default R022_PropsDefault;