import {computed} from 'vue';
import { useStore } from 'vuex';

const enhanceMap =(mapper)=>{
    let store = useStore();
    let storeState= {};
    let stateList = mapper;
    Object.keys(stateList).forEach(key=>{
        let fn = stateList[key].bind({$store:store})
        storeState[key] = computed(fn);
    })
    return storeState
}

export default enhanceMap