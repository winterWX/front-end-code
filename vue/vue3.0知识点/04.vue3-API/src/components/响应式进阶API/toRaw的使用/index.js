
/***
 *   返回  reactive, shallowReactive 和 readOnly, shallowReadOnly 创建的响应式对象的
 *   原始对象
 * 
*/

const foo = {}
const reactiveFoo = reactive(foo)

console.log(toRaw(reactiveFoo) === foo) // true



// markRaw  标记一个对象为不可以代理对象
