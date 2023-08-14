// DocumentFragment 优化页面性能, 减少页面回流和重绘的次数
const oFragment = document.createDocumentFragment()
for (var i = 0; i < 1000; i++) {
    const op = document.createElement('span')
    const oText = document.createTextNode(i)
    op.appendChild(oText)
    oFragment.appendChild(op)
}
document.body.appendChild(oFragment)
