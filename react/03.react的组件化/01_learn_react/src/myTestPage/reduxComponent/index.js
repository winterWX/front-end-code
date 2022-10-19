import React,{ PureComponent } from "react";
import About from "./about";
import Home from "./home";

class App extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div style={{textAlign:'center', marginTop: '100px'}}>
                <About/>
                <br/>
                <Home/>
            </div>
        )
    }
}

export default App;