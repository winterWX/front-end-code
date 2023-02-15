import PackPageUi from "./pack-page-ui/index.vue"

const com = [ PackPageUi ]

const install = function(Vue,options){
    com.forEach(item=>{
        Vue.component(item.name, item)
    })
}

export default { install }