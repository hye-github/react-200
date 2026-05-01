import React, { Component } from 'react';

class R017_Props extends Component {
    // props는 부모 컴포넌트가 자식 컴포넌트에 데이터를 전달할 때 사용
    // props를 전달 받은 자식 컴포넌트에서는 데이터를 수정할 수 없음
    // 데이터 변경하기 위해서는 컴포넌트 내부에서만 사용하는 변수에 값을 넣어 사용해야함
    render() {
        let props_value = this.props.props_val;
        // this.props. 뒤에 상위 컴포넌트(App.js)에서 전달 받은 props 변수명을 붙이면 해당 데이터 사용 가능
        // 데이터 수정 시 props 자체가 아닌 컴포넌트 내부 변수(props_val)에 옮겨 가공
        props_value += ' from App.js'
        return ( 
            <div>{props_value}</div>
        )
    }
}

export default R017_Props;