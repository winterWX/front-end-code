测试过程： https://zhuanlan.zhihu.com/p/409098487
实现的过程：https://blog.csdn.net/cookcyq__/article/details/125668784
实现的过程： https://blog.csdn.net/qq_27244301/article/details/129493670
实现的过程： https://blog.csdn.net/qq_41887214/article/details/120619211

# 步骤

1.创建单独的项目
2.编写组件
3.修改package.json文件配置打包的文件 lib
4.创建根目录编写挂载的函数，use的时候就会调用
5.打包
6.npm link 生成软路径进行测试
7.测试完了，就npm unlink 组件名
8.npm publish