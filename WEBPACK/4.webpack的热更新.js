/**
 * 
 *  热更新：
 *  优化打包构建速度，一个模块发生变化只会打包这个模块。打包后浏览器不需要刷新，可以自动更新内容
 * 
*/


/***
 * 
 *  3. 什么是chunk？什么是bundle？
 *     首先告诉 Webpack 一个入口文件，如 index.js 为起点作为打包，
 *     将入口文件的所有依赖项引入进来，这些依赖会跟入口文件形成一个文件（代码块），这个文件（代码块）就是 chunk
 *     将这个代码块（chunk）进行处理，比如把 less 文件编译成 css，js 资源编译成浏览器能识别的 js 语法等等操作，
 *     这些就叫做打包，将打包好的资源再输出出去，这个输出的文件就叫 bundle
 *     module：是开发中的单个模块
 *
 * 
*/

