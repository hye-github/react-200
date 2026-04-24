import React, { Component } from 'react';

class R010_Variable extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        var varName = 'react';
        console.log('varName1 : '+varName); //varName1 : react

        var varName = '200'; //Line 14:13:  'varName' is already defined  no-redeclare. Front server's message
        console.log('varName2 : '+varName); //varName2 : 200 //출력 자체는 정상

        let letName = 'react';
        console.log('letName1 : '+letName); //letName1 : react

        //let letName = '200'; // Line 20:12:  Parsing error: Identifier 'letName' has already been declared. (20:12). Front server's error

        letName = 'react200';
        console.log('letName2 : '+letName); //letName2 : react200

        const constName = 'react';
        console.log('constName : '+constName); //constName : react

        //const constName = '200'; //Line 28:14:  Parsing error: Identifier 'constName' has already been declared. (28:14). Front server's error

        //constName = 'react200'; //Uncaught TypeError: Assignment to constant variable. at R010_Variable.componentDidMount. DevTools's error
    }

    render() {
        return ( 
            <h2>[ THIS IS Variable ]</h2>
        )
    }
}

export default R010_Variable;