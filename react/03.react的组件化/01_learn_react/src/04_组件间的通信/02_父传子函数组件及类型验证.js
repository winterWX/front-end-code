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
 *  函数组件
 */

function ChildCop(props) {
     let { name, age } = props //没有this
     return (
          <div>
               <h1>我是函数组件--接收父组件的值</h1>
               <div>{name}---{age}</div>
          </div>
     )
}

ChildCop.defaultProps = {
     name: "wx",
     age: 30
}

ChildCop.propTypes = {
     name: PropTypes.string.isRequired,
     age: PropTypes.number
}

export default App;