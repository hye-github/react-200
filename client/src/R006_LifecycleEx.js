import React, { Component } from 'react';

class R006_LifecycleEx extends Component {
    static getDerivedStateFromProps(props, state) { //constructor() 함수 다음으로 실행
        console.log('2. getDerivedStateFromProps Call :'+props.prop_value);
        return {}; //컴포넌트가 새로운 props를 받게 되었을 떄 state를 변경해준다
    }
    constructor(props) {
        super(props);
        this.state = {};
        console.log('1. construtor Call');
    }

    render() {
        console.log('3. render Call');
        return ( 
            <h2>[ THIS IS CONSTRUCTOR FUCNTION ]</h2>
        )
    }
}

export default R006_LifecycleEx;