
// # loader 和 plugin的区别
// 1.loader主要用途是用于 对模块进行转换和处理。
‌// 2.Plugin‌则用于扩展Webpack的功能，实现如打包优化、资源管理、环境变量重新定义等更广泛的任务。

// # chunk 和  bundle的区别
    // chunk: Webpack通过分析模块之间的依赖关系，将它们组织成不同的chunks，以便进行更高效的打包和加载。
    // 一个chunk通常是由一个或多个模块组成，代表了最终打包结果中的一部分。通过配置，chunks可以进行分割，以实现按需加载或并行加载等优化策略

    // bundle:Bundle是Webpack打包后的最终输出结果，它是一个或多个chunks的集合，包含了应用程序运行所需的所有代码和资源。
    // 在Vue项目中，通常会有一个或多个bundles，例如主bundle（包含应用程序的主要代码）和供应商bundle（包含第三方库和依赖）。
    // Bundle是经过Webpack加载、编译和打包后的最终文件，可以直接在浏览器中运行，可以包含JavaScript、CSS、图片等多种类型的资源

