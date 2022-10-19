import React from 'react';

class home extends React.Component {
     constructor(props) {
          super(props);

          this.state = {
               id: 0
          };
     }
     componentDidMount(){
          console.log('this.props.match.params',this.props)
          if(JSON.stringify(this.props.match.params) !== '{}'){
             this.setState({
               id: this.props.match.params.id
             })
          }
     }
     render() {
          return <div>
               <h1>home(使用动态路由id传值)---{this.state.id}</h1>
          </div>;
     }
}

export default home;