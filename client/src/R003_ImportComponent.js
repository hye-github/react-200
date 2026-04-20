import React, { Component } from 'react';

class R003_ImportComponent extends Component { //상속 (Component에는 화면을 그리는 기능이 있다)
    render () { //화면에 코드 내용을 그려주는 함수
        return ( //내부의 html이 실제 화면에 보임
            <h2>[ THIS IS IMPORTED COMPONENT ]</h2>
        )
    }
}

export default R003_ImportComponent; //이 컴포넌트를 다른 파일에 가져다 쓸 수 있도록 내보내는 코드