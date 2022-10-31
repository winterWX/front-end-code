import axios from 'axios';
const computedUse = {
    namespaced: true,
    state:{
        bannerList:[],
        paramsNum: '你好我是store里的值111'
    },
    mutations:{
        changeBanner(state,payload){
            state.bannerList = payload
        }
    },
    actions:{
        // { commit,dispatch,getter,rootGetter,rootState,state } = context
        getBannerList({commit}){
            return new Promise((resolve,reject)=>{
            axios.get('http://123.207.32.32:8000/home/multidata').then(res => {
                commit('changeBanner',res.data.data.banner.list)
                resolve(res.data.data.banner.list);
            }).catch(err=>{
                console.log('err----',err)
                reject(err);
            })
            })
        }
    },
    getters:{

    }
}

export default computedUse