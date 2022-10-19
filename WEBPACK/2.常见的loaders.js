/**
 * 
 *  是用来告诉webpack如何转换某一类型的文件，并且引入到打包的文件中
 *  0.style-loader: 是在Dom里插入一个<style>标签，并且将css写入这个标签内。 
 *  1.css-loader: 将css文件变成commonjs模块加载在js中，样式内容是字符串。  
 *  2.url-loader: 在文件很小的情况下以base64的方式把文件内容注入到代码中去。
 *  3.file-loader: 编译除了js/css/html之外的文件。
 *  4.html-loader: 处理html中的img。
 *  5.babel-loader：es6转es5。
 *  6.eslint-loader: 通过eslint检查js代码。
 * 
**/