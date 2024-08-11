// 1.命名空间的用法，嵌套，抽离，导出，简化，合并。 // 必须导出才能使用，也可以嵌套
// 2.命名空间的案例  -  跨端归类特有的方法


namespace A{
    export const a = '11'
}
namespace B{
    export const a = '11'
     namespace C{
        
     }
}