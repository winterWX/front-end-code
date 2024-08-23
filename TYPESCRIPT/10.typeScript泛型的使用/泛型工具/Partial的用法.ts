// 将interface里面的所有属性都变成可选属性,接收一个泛型

interface obj{
    name: 'hello',
    age: 20
}

type user = Partial<obj>

// 实现原理
type