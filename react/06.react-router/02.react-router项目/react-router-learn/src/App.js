import React,{Suspense} from 'react';
import { BrowserRouter, Link, NavLink, Route, Switch,withRouter} from 'react-router-dom'
import { renderRoutes } from 'react-router-config';
import routes from "./router";
import styled from 'styled-components';
// import Home from './pages/home';
// import About from './pages/about';
// import Profile from './pages/profile'
// import User from './pages/user';
// import Nomath from './pages/nomath';

const RouterDiv = styled.div`
   a{
     padding: 10px;
     font-size: 20px;
   }
   .linkStyle{
      color: blue;
      font-size: 50px;
   }
`

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      info:{
        name:'wx',
        height:180,
        age:30
      }
    };
  }


  componentDidMount(){
    
  }

  btnRouter(){
      // 为组件增加history属性
      console.log('btn',this.props.history)
  }

  render() {
    return (
      <div>
          <RouterDiv>
              <NavLink exact to='/' activeClassName="linkStyle">我是login</NavLink>
              <NavLink  to={`/home/23`} activeClassName="linkStyle">我是home</NavLink>
              <NavLink  to="/about" activeClassName="linkStyle">我是about</NavLink>
              <NavLink  to="/profile?name=wx&age=30" activeClassName="linkStyle">我是profile</NavLink>
              <NavLink  to={{
                              pathname:'/user',
                              state: this.state.info
                          }} activeClassName="linkStyle">我是user</NavLink>
              <NavLink  to="/nomath" activeClassName="linkStyle">我是nomath</NavLink>
          </RouterDiv>

          <Suspense  fallback='<div>Loading...</div>'>
            {
              renderRoutes(routes)
            }
          </Suspense>

          <button onClick={()=> this.btnRouter()}>btn 路由</button>
      </div>
    )
  }
}

export default withRouter(App);


// withRouter 1. 是给组件添加 history属性
//            2. 必须要被路由进行包裹


// renderRoutes  只有用renderRoutes渲染的路由 才能有 this.props.route 拿到子路由对象