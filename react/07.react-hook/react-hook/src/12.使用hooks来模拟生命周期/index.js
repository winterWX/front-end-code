import react,{useState,useEffect,useRef} from "react";
import Childen from "./childen";

const Index = ()=>{
    const [counter,setCounter] = useState(0);
    let [num,addNmu] = useState(1);
    const mounted = useRef(false);
    
    // 模拟 componentDidMount
    // useEffect 的第一个值会在浏览器布局和绘制完成后调用
    useEffect(()=>{
        setCounter(counter+1);
        console.log('模拟componentDidMount');
    },[]);

    // 模拟 componentDidUpdate
    useEffect(()=>{
       if(!mounted.current){
            mounted.current = true
       }else{
            console.log('模拟 componentDidUpdate',mounted.current)
       }
    });

    // 模拟 componentWillMount
    useEffect(()=>{
        return ()=>{
            console.log('模拟 componentWillMount')
        }
    },[]);

    // const countChange= ()=>{
    //     let numData = num++;
    //     addNmu(numData)
    // }
    
    function countChange(){
        let numData = num++;
        addNmu(numData)
    }

    return (
        <div>
            <Childen counter={num} />
            <div>dadad:{counter}</div>
            <button onClick={ ()=>{ countChange() }}>点击count+</button>
        </div>
    )
}   

export default Index