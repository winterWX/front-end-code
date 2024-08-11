// 1.类装饰器 ClassDecorator
// 2.属性装饰器 PropertyDecorator
// 3.参数装饰器 ParameterDecorator
// 4.方法装饰器 MethodDecorator 
// 5.装饰器工厂
// 6.import 'reflect-metadate'
// 7.axios

const Base:ClassDecorator = (target)=>{
    console.log("target==",target);
    target.prototype._mock = '我是新增属性'
    target.prototype.testFn = function () {
        console.log('---')
    }
}
@Base
class Http{
    //.....
}

const app = new Http() as any;
//Base(Http)
app.testFn()