import React from 'react';
// import connect from '../../utils/connect2.js'
import {
     aboutAdd,
     aboutIncrement
} from '../../store2/contantCroart'

import { connect } from 'react-redux'

function About(props) {
     return (
          <div>
               <h1>About当前计数：{props.counter}</h1>
               <div>
                    <button onClick={e => props.aboutAdd(1)}>加1</button>
                    <button onClick={e => props.aboutIncrement(-1)}>减1</button>
               </div>
          </div>
     )
}

const mapStateToProps = state => {
     return {
          counter: state.counter
     }
}
const mapDispatchToProps = dispatch => {
     return {
          aboutAdd: function (num) {
               dispatch(aboutAdd(num))
          },
          aboutIncrement: function (num) {
               dispatch(aboutIncrement(num))
          }
     }
}
export default connect(mapStateToProps, mapDispatchToProps)(About);