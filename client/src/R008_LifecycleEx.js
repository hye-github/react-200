import React, { Component } from 'react';

class R008_LifecycleEx extends Component {
    static getDerivedStateFromProps(props, state) {
        console.log('2. getDerivedStateFromProps Call :'+props.prop_value);
        return {tmp_state:props.prop_value};
    }

    constructor(props) {
        super(props);
        this.state = {};
        console.log('1. construtor Call');
    }

    componentDidMount() { //'생성' 단계의 생명주기 함수 중 가장 마지막으로 실행됨
        console.log('4. componentDidMount Call');
        console.log('5. tmp_state :'+this.state.tmp_state);
        this.setState({tmp_state2 : true}); 
        //tmp_state2라는 state 변수에 boolean 유형의 true 데이터 셋팅 → setState() 함수는 변수의 선언과 초기화를 동시에 실행
        //state의 변경이 발생했기때문에 '변경' 단계의 생명주기 함수인 shouldComponentUpdate()가 실행됨
    }

    shouldComponentUpdate(props, state) { //'변경' 단계의 생명주기 함수
        console.log('6. shouldComponentUpdate Call / tmp_state2 = '+state.tmp_state2);
        return state.tmp_state2
        //해당 함수는 boolean 유형의 데이터를 반환하는데 return 값이 true일 경우에 render() 함수를 한번 더 호출함
        //shouldComponentUpdate() 함수의 반환 값에 따라 render() 함수를 재실행할 수 있다는 점을 이용하면 props나 state 변수가 변경될 때 화면을 다시 그리며 제어할 수 있음
    }

    render() {
        console.log('3. render Call');
        return ( 
            <h2>[ THIS IS shouldComponentUpdate FUCNTION ]</h2>
        )
    }
}

export default R008_LifecycleEx;