// 泛型约束
/**
 * 泛型约束即是对泛型类型进行约束控制, 如限制为Object类或指定接口类型。
 * 当在函数里使用泛型参数的属性或者方法时，就需要对泛型进行约束
 */

interface lengthwise{
  length : number
}

function loggingIdentity<T extends lengthwise>(arg: T): T {
  console.log(arg.length);
  return arg
}
loggingIdentity([2,3,4,5,65])



