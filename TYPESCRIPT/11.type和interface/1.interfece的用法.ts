// interface 的用法
    // 1.interface重名 - 就是重合
    // 2.interface 任意key
    
    interface promiseParams {
        id: '3423',
        name: '1111',
        // 索引签名
        [resParams: string]: any  // 相当将不重要的属性 于归纳到一起
    }

    // 3.interface ? 和 readonly(函数和id不让随便改)

    // 4.interface 继承 extends, A,B,C多继承
    // 5.定义的属性不能多也不能少 

    // ts的增强
    interface Obj{
        user: number[],
        add:(this:Obj, num: number)=> void
    }
    let objCopy: Obj = {
        user: [1,2,3],
        add(this:Obj, num:number){
            this.user.push(num)
        }
    }
    objCopy.add(20)
    
    console.log();