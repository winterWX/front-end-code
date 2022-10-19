//定义一个加法函数
function add(){
    var args = arguments, //获取所有的参数,arguments是一个对象
        d = 0, //定义小数位的初始长度，默认为整数，即小数位为0
        sum = 0; //定义sum来接收所有数据的和
    //循环所有的参数
    for(var key in args){ //遍历所有的参数
        //把数字转为字符串
        var str = "" + args[key];
        if(str.indexOf(".")!=-1){ //判断数字是否为小数
            //获取小数位的长度
            var temp = str.split(".")[1].length;
            //比较此数的小数位与原小数位的长度，取小数位较长的存储到d中
            d = d < temp ? temp : d;
        }
    }

    //计算需要乘的数值
    
    /**
     * 
     *  Math.ceil() 向上取整
     *  Math.floor() 向下取整
     *  Math.sbs() 取绝对值
     *  Math.pow() 幂的运算
     *  Math.min()
     *  Math.max()
     *  Math.round()
     * 
    */

    var m = Math.pow(10,d);

    //遍历所有参数并相加
    for(var key in args){
        sum += args[key]*m;
    }

    //返回结果
    return sum/m;

}

console.log(add(0.10002,0.201));  //0.3

console.log(add(0.1,0.7));  //0.8