import React from 'react';

class user extends React.Component {
     constructor(props) {
          super(props);

          this.state = {
               info:{}
          };
     }
     componentDidMount(){
          if(JSON.stringify(this.props.location.state) !=="{}"){
               this.setState({
                    info: this.props.location.state
               })
          }
     }
     render() {
          let {name,height,age} = this.state.info
          //return <div>我是user</div>;
          return <h1>我是user(使用路由state传值) ---- {name} --- {height} --- {age}</h1>;
     }
}


export default user;