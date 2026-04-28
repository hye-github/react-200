import React, { Component } from 'react';

class R013_ArrowFunc extends Component {

    constructor(props) {
        super(props);
        this.state = {
            arrowFunc: 'React200',
            num: 3
        };
    }

    componentDidMount() {
        Function1(1);
        this.Function2(1,1);
        this.Function3();
        this.Function4();
        this.Function5(0,2,3);
        
        function Function1(num1) {
            return console.log(num1+'. Es5 Function'); //1. Es5 Function
            //전달 받은 num1 변수 함수 내부에서 사용
        }
    }

    Function2 = (num1, num2) => {
        let num3 = num1 + num2;
        console.log(num3+'. Arrow Function : '+this.state.arrowFunc); //2. Arrow Function : React200
        // function 대신 => 으로 선언. this는 R013_ArrowFunc 컴포넌트. this.state 
    }

    Function3() {
        var this_bind = this;
        setTimeout(function() { //특정 시점에 나중에 호출(call back 함수). 
            console.log(this_bind.state.num+'. Es5 Callback Function no Bind : '); //3. Es5 Callback Function no Bind :
            // 콜백 함수 내부에서는 this로 접근 불가해서 변수에 this 백업 후 사용
            console.log(this.state.arrowFunc); //에러 발생. Uncaught TypeError: Cannot read properties of undefined (reading 'arrowFunc')
            // 콜백 함수 내부에서의 this는 window 객체여서 state 변수에 접근 할 수 없어 undefined 에러 발생
        },100);
    }

    Function4() {
        setTimeout(function() {
            console.log('4. Es5 Callback Function Bind : '+this.state.arrowFunc); //4. Es5 Callback Function Bind : React200
        }.bind(this),100); // 콜백 함수 밖의 this를 bind해주면 this를 컴포넌트로 사용 가능
    }

    Function5 = (num1, num2, num3) => {
        const num4 = num1 + num2 + num3;
        setTimeout(() => {
            console.log(num4+'. Arrow Callback Function : '+this.state.arrowFunc); //5. Arrow Callback Function : React200
        },100); // 화살표 함수에서는 this를 bind 안해도 알아서 state에 접근
    }

    render() {
        return ( 
            <h2>[ THIS IS Arrow Function ]</h2>
        )
    }
}

export default R013_ArrowFunc;