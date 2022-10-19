import React from 'react';
// import connect from '../../utils/connect2.js';

import {
     homeAdd,
     homeIncrement
} from '../../store2/contantCroart';
import { connect } from 'react-redux'

function Home(props) {
     return (<div>
          <h1>Home当前计数：{props.counter}</h1>
          <div>
               <button onClick={e => props.homeAdd(5)}>加5</button>
               <button onClick={e => props.homeIncrement(-5)}>减5</button>
          </div>
     </div>)
}

const mapStateToProps = state => {
     return {
          counter: state.counter
     }
}

const mapDispatchToProps = dispatch => {
     return {
          homeAdd(num) {
               dispatch(homeAdd(num))
          },
          homeIncrement(num) {
               dispatch(homeIncrement(num))
          }
     }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);