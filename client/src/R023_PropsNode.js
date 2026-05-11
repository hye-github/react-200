import React, { Component } from 'react';

class R023_PropsNode extends Component {
    render() {
        return ( 
            <div style={{padding: "0px"}}>
                {this.props.children}
            </div>
            // props.children은 PropsNode 태그 사이의 노드를 의미한다.
            // <PropsNode><span>node from App.js</span></PropsNode>에서
            // <span>node from App.js</span>이 props.children이 된다.
        )
    }
}

export default R023_PropsNode;