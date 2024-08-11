// 类的混入，以插件的形式
class App{
    run(){
        console.log('插件类型的混入');
    }
}

class Log{
    log(msg:string){
        console.log("msg",msg);
    }
}

class User{
    render(){
        console.log('render');
    }
}

type mainType<T> = new (...args:any[]) => T
function pluginsMixin<T extends mainType<App>>(Base: T){
    return class extends Base{
        private Log = new Log();
        private User = new User();
        constructor(...args:any[]){
            super(...args);
            this.Log = new Log();
            this.User = new User();
        }
        run(): void {
            this.Log.log('hello');
            this.User.render();
        }
    }
}

const mixinsObject = pluginsMixin(App);
const app = new mixinsObject();
app.run()