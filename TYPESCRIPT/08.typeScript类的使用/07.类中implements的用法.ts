/**
 *   ts 类中implements的用法
 *   
 *   作用：提取其他类中的共同方法和属性， 供其他类继承
 *   
 */

// class Car{
//     switchRadio(trigger:boolean){
        
//     }
// }
 
// class cellphone{
//     switchRadio(trigger:boolean){
        
//     }
// }

interface Radio{
    switchRadio(trigger:boolean):void        //注意写法，void表示函数没有返回值
}
 
class Car implements Radio{
    switchRadio(trigger:boolean){
        
    }
}
 
class cellphone implements Radio{
    switchRadio(trigger:boolean){
        
    }
}

// ---------------------------------------------------------------------

interface Battery{
    checkBatteryStatus():void;
}
 
interface Radio{
    switchRadio(trigger:boolean):void;       //注意写法，void表示函数没有返回值
}
 
class Car1 implements Radio{
    switchRadio(trigger:boolean){
        
    }
}
 
class cellphone1 implements Radio,Battery{        //逗号连接
    switchRadio(trigger:boolean){
        
    }
 
    checkBatteryStatus(){        //内部方法加上checkBatteryStatus，注意：不能少！！！！！
 
    }
}

// -------------------------------------------------------------------------------------------