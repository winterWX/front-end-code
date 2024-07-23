var test = {
    name: 'lili',
    age: 20,
    _address:'广东' 
}
/**
 *  存取属性的优点:
 * 
 *  1.隐藏某一个私有属性不被外界使用和赋值
 *  2.可以截取某个属性访问和设置值的过程
 */
Object.defineProperty(test,'address',{
    configurable: true,
    enumerable: true,
    get: function(){
        // 收集捕获关于address的依赖
        this.address = this._address
    },
    set: function(value){
        // 当值发生改变更改依赖的值
        this._address = value
    }
})