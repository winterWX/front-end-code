1.null和undefind的区别：
  (1)null 是对象类型，表示空值，返回一个空对象指针。
  (2)undefind 是undefin类型 表示未定义,未赋值。
  (3)null转成数字类型是NaN,undefind是0。
  (4)if判断时，两个都为false。

2 == 和 === 的区别
  （1）== 忽视了类型比较，只比较值是不是相等。
  （2）=== 先进行值的比较，值如果相等，再比较类型
  
3 if(!!): 表示不为 null 和undefind