/**
 *  never: 表示一个永远不会存在的类型
 *  //可以检查边界情况
*/

function hanceChange(message: number |string |boolean){
    switch (typeof message) {
        case 'number':
            console.log('number 的处理方式');
            break;
        case 'string':
            console.log('number 的处理方式');
            break;
        default:
            const check:never = message // 永远不行
            //break;
    }
}

hanceChange(true)