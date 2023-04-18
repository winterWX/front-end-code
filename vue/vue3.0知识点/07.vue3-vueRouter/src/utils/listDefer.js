import { ref } from 'vue'
export default function deferFn(maxNum) {
    const num = ref(0)
    function refreshFrameCounter() {
        requestAnimationFrame(() => {
            num.value++
            if (num.value <= maxNum) {
                refreshFrameCounter()
            }
        })
    }
    refreshFrameCounter()
    return function (showInFrameCounter) {
        return num.value >= showInFrameCounter
    }
}