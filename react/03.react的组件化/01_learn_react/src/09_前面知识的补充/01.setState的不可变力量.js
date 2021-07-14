import React from 'react';


/**
 *  setState数据的不可变性
 * 
 * 
 */


class App extends React.Component {
     constructor(props) {
          super(props);

          this.state = {
               friend: [
                    {
                         name: '刘德华',
                         age: 60
                    },
                    {
                         name: '梁朝伟',
                         age: 59
                    },
                    {
                         name: '谢霆锋',
                         age: 40
                    }
               ]
          };
     }

     render() {
          console.log('======', this.state.friend);
          return (
               <div>
                    <h1>好友列表的展示</h1>
                    <ul>
                         {
                              this.state.friend.map((item, index) => {
                                   return (
                                        <li key={item.name}>
                                             <span>{item.name}</span>
                                             <span>{item.age}</span>
                                             <button onClick={e => this.ageAdd(index)}>age+1</button>
                                        </li>
                                   )
                              })
                         }
                    </ul>
                    <button onClick={e => this.listDataAdd()}>添加数据</button>
               </div>
          )
     }

     // shouldComponentUpdate(nextState) {
     //      if (nextState.friend !== this.state.friend) {
     //           return true
     //      }
     //      return false
     // }

     listDataAdd() {
          //是引用类型必须这样做
          const newFriend = [...this.state.friend];
          newFriend.push({ name: '9999', age: 1000 });
          this.setState({
               friend: newFriend
          })
     }

     ageAdd(index) {
          // console.log('-----', index)
          // const newFriend = [...this.state.friend];
          // newFriend[index].age + 1
          this.setState({
               friend: this.state.friend.map((item, indey) => {
                    return {
                         ...item,
                         age: index === indey ? item.age + 1 : item.age
                    }
               })
          })
     }
}


export default App;