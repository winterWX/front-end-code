import { onMounted, onUnmounted, ref } from 'vue' 

function useMouseMove(){
    let X = ref(0)
    let Y = ref(0)
    const moveFn = (e)=>{
        X.value = e.pageX
        Y.value = e.pageY
    }
    onMounted(()=>{
        window.addEventListener('mousemove',moveFn)
    })
    onUnmounted(()=>{
        window.removeEventListener('mousemove',moveFn)
    })

    return { X, Y}
}

export default useMouseMove


