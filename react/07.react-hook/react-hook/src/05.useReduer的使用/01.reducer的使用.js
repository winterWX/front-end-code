import React, { useReducer } from 'react';

function reducer(state, action) {
     switch (action.type) {
          case "inCrement":
               return { ...state, couter: state.couter + 1 }
          case "subCrement":
               return { ...state, couter: state.couter - 1 }
          default:
               return state
     }
}

function inCrement() {
     return { type: "inCrement" }
}
function subCrement() {
     return { type: "subCrement" }
}
const Home = () => {
     const [state, dispatch] = useReducer(reducer, { couter: 0 })
     return (
          <div>
               <h1>当前计数：{state.couter}</h1>
               <button onClick={e => dispatch(inCrement())}>+1</button>
               <button onClick={e => dispatch(subCrement())}>-1</button>
          </div>
     )
}

export default Home;