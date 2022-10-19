import React,{ memo,useMemo,useState } from "react";


const Prolist = memo((props)=>{
      let {name,age } = props.info
      console.log('是不是每次都会渲染')
      return(
          <>
            <h2>显示父组件传过来的数据</h2>
            <div>{name} ---- {age}</div>
          </>
      )
})


const UseMemoComponent = ()=>{
    
    let [info, infoChange] = useState({name: '王者', age:30})
    
    const changeObject = ()=>{
        let paras =  Object.assign({},info)
        paras.age = paras.age + 1
        infoChange(paras)
    }

    const dataParams = useMemo(() => {
        return info
    }, [info]);

    return(
        <div>
            <Prolist  info = {dataParams}/>
            <button onClick={changeObject}>改变info的值</button>
        </div>
    )
}


export default UseMemoComponent