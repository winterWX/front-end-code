import pigButton from './pig-button/index.vue'

const com = [pigButton]
const install = function (App, options) {
    com.length > 0 && com.forEach(item => {
        App.component(item.name, item)
    })
}

if (typeof window !== 'undefine' && window.Vue) {
    install(window.Vue)
}

export default { install, pigButton }  