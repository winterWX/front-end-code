import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * 父传子  值--属性的验证
*/

class App extends Component {
     constructor(props) {
          super(props);
          this.state = {
               name: '刘德华',
               age: 60
          };
     }

     render() {
          let { name, age } = this.state
          return (
               <div>
                    <ChildCop name={name} age={age} />
               </div>
          );
     }
}

/**
 * 关于子组件通过props能接收到父组件的值：
 * 1.因为父组件有子组件想要的值，直接可以通过super(props) 将子级需要的参数保存在父级里
 * 2.在实际继承中，通过 子构造函数.call(this,要继承的参数)已经将this修正指向了父级，
 * 所以通过this.props,就可以获取到
 * 
*/

class ChildCop extends Component {
     constructor(props) {
          super(props);

          this.state = {
          };
     }

     //类组件可以写到这里 但必须得 前面加 static
     static defaultProps = {
          name: 'li san',
          age: 0
     }

     render() {
          let { name, age } = this.props
          return (
               <div>
                    <h1>接收父组件传过来的参数</h1>
                    <div>name---{name} + age:{age}</div>
               </div>
          )
     }

}

ChildCop.propTypes = {  //propTypes  这儿必须是小写
     name: PropTypes.string.isRequired,
     age: PropTypes.number
}

export default App;