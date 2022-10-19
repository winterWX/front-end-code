import { createStore } from 'vuex';
import footer from './footer';
import midden from './middenDev';
import header from './header';
import computedUse from "./computed获取store里的值"

const store = createStore({
   state:{
      paramsNum: '你好我是store里的值'
   },
   mutations:{
      
   },
   actions:{
   
   },
   getters:{

   },
   modules:{
      footer,
      midden,
      header,
      computedUse
   }
});

export default store