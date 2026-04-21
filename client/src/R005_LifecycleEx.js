import React, { Component } from 'react';

class R005_LifecycleEx extends Component { //자식 컴포넌트 = 불러와서 사용되는 쪽, 즉 R005_LifecycleEx 파일 자체
    constructor(props) { // 생명주기 함수 중 가장 먼저 실행되며, 처음 한 번만 호출됨, 자식 컴포넌트 constructor
        super(props); // super함수는 가장 위에 호출해야함, 부모한테서 props 받아오는 역할
        this.state = {}; // component 내부에서 사용되는 변수(state)를 선언하고, 부모객체에서 전달받은 변수(props)를 초기화할 때 사용한다.
        console.log('1. constructor Call');
    }
    render () { 
        console.log('3. render Call');
        return ( 
            <h2>[ THIS IS CONSTRUCTOR FUCNTION ]</h2>
        )
    }
}

export default R005_LifecycleEx;