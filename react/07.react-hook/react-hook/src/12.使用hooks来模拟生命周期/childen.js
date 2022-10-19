import react,{memo,useEffect} from "react";

const Childen = memo((prevProps,nextProps)=>{

    useEffect(()=>{
        console.log('====', nextProps.counter, prevProps.counter)
    })

    return(
        <div>children 组件值的变化: {prevProps.counter}</div>
    )
    
},(prevProps,nextProps) => nextProps.counter !== prevProps.counter)

export default Childen