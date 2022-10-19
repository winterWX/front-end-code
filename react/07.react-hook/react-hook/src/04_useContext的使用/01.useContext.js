import React, { useContext, createContext } from 'react';

//在需要共享的页面创建context

const user = createContext();
const themContent = createContext();

const UseContext = () => {
     const userTh = useContext(user);
     const them = useContext(themContent);
     return <div>{userTh}--{them}</div>;
}

export default UseContext;