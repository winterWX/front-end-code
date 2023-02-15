# 封装组件，然后发布到npm上

1.为什么要把封装好的组要发布到npm上：{
    1.减少组件的重复封装，适用范围更加广
    2.统一维护，提高效率
}


# 具体流程

1.创建用于上传的组件, 15.封装组件发布到npm上/pack-ui.vue
2.在文件目录下创建根文件 index, 用于注册全局组件，注册完将install暴露出去，打包可以用use使用
3.修改根目录的 vite.config.js 的相关配置，修改成组件打包库的模式

export default defineConfig({
  plugins: [vue()],
  build: {
    outDir: "pack-page-ui", //输出文件名称
    lib: {
      entry: path.resolve(__dirname, 'src/components/15.封装组件发布到npm上/index.js'), //指定组件编译入口文件
      name: 'pack-page-ui',
      fileName: "pack-page-ui"
    }, //库编译模式配置
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})

4.npm run build 进行打包

5.打包完成后，在包根目录 npm init -y 初始化package.json
    {
        "name": "pack-page-ui", //包名字
        "private": false, 
        "version": "0.0.1", //版本号
        "description": "一个简单的组件库",
        "main": "pack-page-ui.js",
        "scripts": {
            "test": "echo \"Error: no test specified\" && exit 1"
        },
        "keywords": ["pack-page-ui"],//在npm上可被搜索的关键字
        "author": "",
        "license": "ISC"
    }

6.上传到npm上(已经注册过的npm账号)
7.配置npm源 npm config set registry=https://registry.npmjs.org (npm g官方)
8.在打包后的文件根目录打开终端，输入npm login登录到官网，输入要填写的信息
9.npm publish 发布
10. npm i XXX 下载使用，会在node_modules里看到

// 案例链接 https://blog.csdn.net/y227766/article/details/126426546