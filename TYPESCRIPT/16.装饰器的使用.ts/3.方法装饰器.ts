// 1.类装饰器 ClassDecorator
// 2.属性装饰器 PropertyDecorator
// 3.参数装饰器 ParameterDecorator
// 4.方法装饰器 MethodDecorator 
// 5.装饰器工厂
// 6.import 'reflect-metadate'
// 7.axios

// 方法装饰器

const Get = (url:string)=>{
    const fn:MethodDecorator = (target,key,descriptor)=>{
        console.log(target,key,descriptor);
        axios.get(url).then((result) => {
            descriptor.value = result.data;
        }).catch((err) => {
            descriptor.value = '请求错误!!!';
        });
    };
    return fn;
}

const Result = ()=>{
     
}

class Http{
    //.....
    @Get('https://api.apiopen.top/api/getHaoKanVideo?page=0&size=10');
    getList:(@Result() ndata:any)=>{
        //console.log('data');
    };
}

const app = new Http() as any;
app.testFn();