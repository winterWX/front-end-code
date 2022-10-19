    /**
     *  require 和 import 的区别
     *  
     *  区别一 (模块加载的时间)：
     *  
     *  require 是运行时就会加载
     *  import 是编译时加载(效率更)(编译时加载，所以import命令会提升到整个模块的头部)
     **/ 

       test();
       import { test} from '/test';
    //上面的代码不会报错，正常执行

    /*** 
     * 
     *  区别二:(模块的本质)
     *  require: 模块就是对象，输入时必须查找对象属性。
     *  import: 模块不是对象，而是export显示的指定输出的代码，再通过import命令输入。
     *  
    */
    
    // CommonJS模块
    let { exists, readFile } = require('fs');
    // 等同于
    let fs = require('fs');
    let exists = fs.exists;
    let readfile = fs.readfile;

    //上面CommonJs模块中，实质上整体加载了fs对象（fs模块），然后再从fs对象上读取方法。


    // ES6模块
    import { exists, readFile } from 'fs';
    //上面ES6模块，实质上从fs模块加载2个对应的方法，其他方法不加载。

    
   /**
   * 区别三：严格模式下
   * CommonJs模块和ES6模块的区别：
        （1）CommonJs模块默认采用非严格模式
        （2）ES6 的模块自动采用严格模式，不管你有没有在模块头部加上 “use strict”;
        （3）CommonJS 模块输出的是一个值的拷贝，ES6 模块输出的是值的引用，举例如下
   */

    // m1.js
    export var foo = 'bar';
    setTimeout(() => foo = 'baz', 500);

    // m2.js
    import {foo} from './m1.js';
    console.log(foo); //bar
    setTimeout(() => console.log(foo), 500); //baz
    
    //ES6 模块之中，顶层的 this 指向 undefined ，即不应该在顶层代码使用 this