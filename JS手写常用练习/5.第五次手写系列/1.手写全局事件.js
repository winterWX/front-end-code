class wxEvent {
    constructor() {
        this.busFnArr = {}
    }
    on(clickName, callbackFn, thisArg) {
        let handler = this.busFnArr[clickName]
        if (!handler) {
            handler = []
            this.busFnArr[clickName] = handler
        }
        handler.push({ callbackFn, thisArg })
    }

    emit(clickName, arg) {
        let handler = this.busFnArr[clickName]
        if (!handler) return
        handler.forEach(bus => {
            bus.callbackFn.apply(bus.thisArg, [arg])
        });
    }

    off(clickName, callbackfn) {
        let handler = this.busFnArr[clickName]
        if (!handler) return
        let newHandler = [...handler]
        const node = newHandler.findIndex(item => {
            return item.callbackFn === callbackfn
        })
        if (node > -1) {
            handler.splice(node, 1)
        }
    }
}