
/**
 * 由于重绘和重排代价比较昂贵,因此最好的方式是减少它发生的次数
 * 可以合并多次对DOM和样式的修改
 */

// 例如：

const el = document.getElementById('test')
el.style.padding = '5px';
el.style.borderLeft = '1px';
el.style.borderRight = '2px';
