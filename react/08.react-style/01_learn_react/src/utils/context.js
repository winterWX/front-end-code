import { createContext } from "react";

const defaultParams = {
    name: 'coderWx',
    age: 31,
    sex: '男',
    date: '2022-3-26'
};

const ShowParams = createContext(defaultParams);

export{
    defaultParams,
    ShowParams
}
