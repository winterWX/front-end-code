import axios from 'axios';
const footer = {
    namespaced: true,
    state:{
        bannerList:[]
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

export default footer