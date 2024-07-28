/**
 *  多态：
 *  不同类型的  同一操作，所表现的形式不一样，就是多态的表现   
 * 
 *  多态的前提：
 *   1. 必须要有继承
 *   2. 必须要对父类的方法进行重写
 *   3. 必须有父类引用指向子类对象
 * 
*/
class Shape{
  getArea(){}
}

class RantLent extends Shape{
    getArea(){
        return 100
    }
}

class Circle extends Shape{
    getArea(){
        return 200
    }
}

var r = new RantLent()
var c = new Circle()

function lastCount(Shape: Shape){
    console.log(Shape.getArea())
}

lastCount(r)
lastCount(c)