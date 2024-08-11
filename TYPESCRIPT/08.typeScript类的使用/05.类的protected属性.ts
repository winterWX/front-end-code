/**
 *  一般有三个属性
 *  publish
 *  private  // 只能类自身使用
 *  protected  //受保护的，只能在类自身访问或者子类中访问。示例化后的对象也不能调用属性和方法
 */

  class Person{
      protected data: number = 20
      getName(){
        return this.data
      }
  }

  let stu = new Person()

  stu.data // 不能直接访问

  stu.getName()  //可以这样访问