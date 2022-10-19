import React ,{} from 'react';
import useStudentsData from '../hookUtils/hookHandle'


const CuostomHookName  =()=>{
    const data = useStudentsData();
    return(
        <div>{data.name}</div>
    )
}

const CuostomHookAge  =()=>{
    const data = useStudentsData();
    return(
        <div>{data.age}</div>
    )
}

const CuostomHookSex  =()=>{
    const data = useStudentsData();
    return(
        <div>{data.sex}</div>
    )
}

const CuostomHook  =()=>{
    return(
        <div>
            <CuostomHookName />
            <CuostomHookAge />
            <CuostomHookSex />
        </div>
    )
}

export default  CuostomHook