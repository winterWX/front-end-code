/** vue 常用的修饰符 */

#表单修饰符 :{
    lazy, number, trim
}

#事件修饰符 :{
    stop         // 阻止了事件冒泡
    prevent     // 阻止了事件的默认行为
    self       // 是当前元素自身时触发处理函数
    once      // 事件只能触发一次
    capture  // 事件触发从包含这个元素的顶层开始往下触发
    passive // 相当于给onscroll事件加了一个.lazy的修饰符
    native :{
        /*让组件变成像html内置标签那样监听根元素的原生事件，否则组件上使用 v-on 只会监听自定义事件
          注意：使用.native修饰符来操作普通HTML标签是会令事件失效的
          <my-component v-on:click.native="doSomething"></my-component>*/
    }
}

#鼠标按键修饰符 :{
    //left 左键点击、right 右键点击、middle 中键点击
}

#键盘修饰符 :{
    onkeydown
    onkeyup
}

v-bind修饰符 :{
    async
    camel
}