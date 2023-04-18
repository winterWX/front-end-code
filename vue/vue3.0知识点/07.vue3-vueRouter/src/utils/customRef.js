import { customRef } from 'vue'

export default function userDebounce(value, fn, daley, immediate = true) {
    let timer = null
    let isInvoke = false
    return customRef((track, trigger) => {
        return {
            get: () => {
                track()
                return value
            },
            set: (val) => {
                if (immediate && !isInvoke) {
                    trigger()
                    value = val
                    fn()
                    isInvoke = true
                } else {
                    if (timer) { clearTimeout(timer) }
                    timer = setTimeout(() => {
                        trigger()
                        value = val
                        fn()
                        isInvoke = false
                    }, daley)
                }
            }
        }
    })
}