import React from 'react';

class profile extends React.Component {
     constructor(props) {
          super(props);

          this.state = {
          };
     }

     //渲染预备UI
     static getDerivedStateFromError(error){

     }

     //打印报错日志
     componentCatch(){

     }

     componentDidMount(){
          console.log('111',this.props.route)  //会取到当前路由
          console.log('pppppp',this.props.location.search)
     }

     render() {
          return <div>
               <h1>profile</h1>
          </div>;
     }
}

export default profile;