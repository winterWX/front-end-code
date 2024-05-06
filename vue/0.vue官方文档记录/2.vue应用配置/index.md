
# 应用配置
    - 应用实例会暴露一个 .config 对象允许我们配置一些应用级的选项
    app.config

    - 注册一个全局组件
    app.component('TodoDeleteButton', TodoDeleteButton)


    createApp API允许在同一个页面中创建多个共存的vue应用，
    而且每个应用都拥有自己用于配置和全局资源的作用域