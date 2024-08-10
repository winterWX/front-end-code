/**
 *  never: 表示一个永远不会存在的类型
 *  //可以检查边界情况
*/

function hanceChange(message: number | string | boolean | never){
    switch (typeof message) {
        case 'number':
            console.log('number 的处理方式');
            break;
        case 'string':
            console.log('number 的处理方式');
            break;        
        case 'boolean':
            console.log('boolean 的处理方式');
            break;
        default:
            console.log('我是永远不会存在的类型')
            break;
    }
}

hanceChange(true)