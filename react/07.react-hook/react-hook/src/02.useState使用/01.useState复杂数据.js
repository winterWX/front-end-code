import React, { useState } from 'react';

const CounterCnp = () => {
     const studentData = [
          { "name": '刘德华', "age": 20 },
          { "name": '张曼玉', "age": 10 },
          { "name": '梁朝伟', "age": 30 },
          { "name": '刘青云', "age": 15 }
     ]
     let [student, setStudent] = useState(studentData);

     function listAdd(index) {
          //必须要拷贝一个新的数组
          const newData = [...student];
          newData[index].age++;
          setStudent(newData)
     }
     return (
          <div>
               <h1>学生列表的展示</h1>
               <ul>
                    {
                         student.map((item, index) => {
                              return (<li>{item.name}----{item.age}
                                   <button onClick={e => { listAdd(index) }}>增加年龄</button>
                              </li>)
                         })
                    }
               </ul>
          </div>
     )
}


export default CounterCnp;