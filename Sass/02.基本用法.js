
    /******* 1 sass允许使用变量，所有变量以$开头 **********/ 
    // $blue : #1875e7;　
    // 　　div {
    // 　　　color : $blue;
    // 　　}


    /******* 2.变量当做字符串镶嵌  **********/

    //   $side : left;
    // 　.rounded {
    // 　　　　border-#{$side}-radius: 5px;
    // 　}



    /******* 3.允许在代码中使用算式  **********/

    //    body {
    // 　　　margin: (14px/2);
    // 　　　top: 50px + 100px;
    // 　　　right: $var * 10%;
    //    }



    /******* 4. sass 允许继承 @extend **********/

    // .class1 {
    //     border: 1px solid #ddd;
    // }
    // .class2 {
    //     @extend .class1;
    //     font-size:120%;
    // }


    /******* 5. @mixin 定义混入 @inclued引用, @function 定义函数，@return返回结果 **********/

    // 6.文件引入
    //@import "foo.css";