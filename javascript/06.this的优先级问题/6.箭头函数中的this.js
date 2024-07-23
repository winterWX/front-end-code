// 箭头函数的简写方式一

// 1. 如果箭头函数只返回一个对象，那么可以写成
var n = data.filter(()=>({ name: '11',age: 30}))


// 2. 箭头函数的使用

var obj ={ 
    data:[],
    getData: function(){
        var _this = this  // 在setTimeOut里this指的是window,所以this.data是拿不到的
        setTimeout(function(){
            var result = [12,23,45]
            _this.data = result
        },200)
    },
    arrowFn: function(){  // 可以直接获取到这里的this --- obj
        setTimeout(()=>{
            var result = [12,23,45]
            this.data = result
        },200)
    }
}

obj.getData()
obj.arrowFn()