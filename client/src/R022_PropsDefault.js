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
                {/*상위 컴포넌트에서는 ReactString의 값을 전달하지않음. 원래는 콘솔창에서 에러나야하는데 상위 버전이라 에러가 나지않음.*/}
            </div>
        )
    }
}

// props의 기본값은 부모 컴포넌트에서 값이 넘어오지 않을 때 사용
// defaultProps 라는 문법 사용
R022_PropsDefault.defaultProps = {
    ReactString: "리액트",
    ReactNumber: 400
}

export default R022_PropsDefault;