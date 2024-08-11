// implements 是ts用来约束class类的
interface Options{
    el: string | HTMLElement
}

interface VueCls{
    options: Options,
    init(): void
}

interface vNode{
    tag: string     // 标签名
    text?: string  //标签内容
    children?: vNode[]
}

// 虚拟Dom
class Dom{
    // 创建节点的方法
    createElement(el:string){
        return document.createElement(el)
    }
    // 填充文本方法
    setText(el:HTMLElement, text: string | null){
        el.textContent = text;
    }
    // 渲染函数
    render(data:vNode){
        let root = this.createElement(data.tag);
        if(data.children && Array.isArray(data.children)){
            data.children.forEach(item=>{
                let child = this.render(item);
                root.appendChild(child);
            })
        }else{
            this.setText(root,  data.text as string);
        }
        return root;
    }
}

class Vue extends Dom implements VueCls{
    options: Options
    constructor(options: Options){
        super(); // 初始化父类的 prototype.constructor.call, 也可以调用父类的属性和方法
        this.options = options;
    }
    init():void{
        let data: vNode = {
            tag: 'div',
            children:[
                {
                    tag: 'section',
                    text: '我是子节点1'
                },
                {
                    tag: 'section',
                    text: '我是子节点2'
                }
            ]
        }
        let app = typeof this.options.el === 'string' ? document.querySelector(this.options.el) : this.options.el;
        app?.appendChild(this.render(data));
    }
}

new Vue({
    el: 'app'
})