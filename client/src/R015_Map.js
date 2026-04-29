import React, { Component } from 'react';

class R015_Map extends Component {

    componentDidMount() {
        var Map_Arr = [3, 2, 8, 8]
        let Map_newArr = Map_Arr.map(x => x)
        console.log("1. Map_newArr : ["+Map_newArr+"]") //1. Map_newArr : [3,2,8,8]

        let Map_mulitiArr = Map_Arr.map(x => x * 2)
        console.log("2. Map_mulitiArr : ["+Map_mulitiArr+"]") //2. Map_mulitiArr : [6,4,16,16]

        var ObjArray = [{key:'react', value:'200'},
                        {key:'리액트', value:'Twohundred'}];
        let Map_objArr = ObjArray.map((obj, index) => {
            console.log((index+3)+". obj : "+JSON.stringify(obj)) 
            //3. obj : {"key":"react","value":"200"}
            //4. obj : {"key":"리액트","value":"Twohundred"}
            var Obj = {};
            Obj[obj.key] = obj.value;
            return Obj;
        });
        console.log("5. Map_objArr : "+JSON.stringify(Map_objArr)) //5. Map_objArr : [{"react":"200"},{"리액트":"Twohundred"}]
    }

    render() {
        return ( 
            <h2>[ THIS IS MapEach ]</h2>
        )
    }
}

export default R015_Map;