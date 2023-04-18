减少 HTTP 请求（合并 CSS / JS，小于 10k 的图片 base64）
减少 DOM 操作（可使用 DocumentFragment）
避免不必要的重绘与重排（重排必定导致重绘）
优化 CSS 选择器（从右向左匹配）
CSS / JS minify，减少文件体积
开启 Gzip 压缩
将 CSS 放到顶部，JavaScript 放到尾部（JavaScript 会阻塞页面）
压缩图片以及使用 CSS Sprite
使用 CDN 加速，适当进行文件缓存
合理控制 cookie 大小（每次请求都会包含 cookie）