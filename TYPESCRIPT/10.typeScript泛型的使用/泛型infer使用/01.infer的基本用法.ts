// infer 可以进行推导泛型参数
// infer 声明只能出现在extends子语句中
//
interface User{ name: 'hello', age: 20 };

type PromiseType = Promise<User>;

type GetPromiseType<T> = T extends Promise<infer U> ? U : T;

type T = GetPromiseType<PromiseType>;