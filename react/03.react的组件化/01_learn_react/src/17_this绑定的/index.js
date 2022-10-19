import React, {PureComponent} from "react";

class TextIndex extends PureComponent {
    constructor(props) {
        super(props);
        this.state = { 
           counter: 0
        };
        //this.btnClick = this.btnClick.bind(this)
    }
    
    btnClick(){
        
        console.log(111111111111)
        // this.setState((pre)=>({ counter: pre.counter+1 }))
    }

    render() {
        return (
            <div>
                <button onClick={ this.btnClick.bind(TextIndex) }>点击</button>
            </div>
        );
    }
}

export default TextIndex;