1.大文件上传的主要问题：{
   1. 上传时间久，在上传过程中不能进行其他操作，只能等待
   2. 请求会设置请求的时常，由于大文件上传时间过长，导致请求失败 
   3. 体验效果不好
}

问题分析： {
    1.大文件上传，进行文件拆分上传，请求支持文件贴片
    2.支持断点续传
    3.支持显示上传文件进度和停止上传
}

# 开发流程：
1. 先进行文件切片， filer.size获取传入文件的总长，设置要切片size大小值，
然后通过filer.slice()等份对文件进行循环截取,每次给初始值加size,直到初始值的长度和filer.size的长度相等。
将截取后的每个贴片文件到数组里 贴片成功。

2.计算文件的hash值：{
    考虑到上传大文件时，计算hash非常耗时，并且会引起UI的堵塞，导致页面假死。所以我们采用web-worker,在worker线程计算hash,这样就不会造成页面堵塞的问题，用户可以继续进行交互。
    实例化web-worker时，需要传递一个js路径做为参数，且不能跨域，所以在public目录下创建了hash.js
    通过importScript将hash.js里的spark-md5.min.js进行导入。
    过程： 在web-worker里调用onmessage方法将 贴片数组传入，
    利用FileReader读取每个切片的ArrayBuffer并传入到spark-md5中进行计算，每计算完一个切片的hash就向web-worker线程发送一个进程事件，全部完成后将最终的hash发送给主线程
}

3.进行文件的上传:{
    1. 先传递(文件名和文件hash)调用接口进行文件认证，接口会返回文件是否已经上传的标识 和 已上传的切片数组
    如果标识返回需要上传，那就上传 返回的切片数组里没有的贴片。:{

        1.进行数据组装并为每个切片创建上传请求，
        循环遍历切片数组，查看每一项的hash值，是否已经包含在了以上次传的切片数组了，筛选拿到需要上传的贴片数据数组，
        new formDate 为每个切片创建数据， 将每一个切片的hash, 切片文件，大文件的hash和大文件的名称，append到FormDate里
        做为单个切片请求的数据，
 
        然后Promise.all并发。也可以选择多次并发

        所以切片上传完成后， 再发一个合并切片的接口，告诉后端，文件已经上传完成了。
    }
}

// 相关文档链接
https://blog.csdn.net/weixin_43989307/article/details/124863516

https://www.bilibili.com/video/BV1UH4y1H78o/?spm_id_from=333.337.search-card.all.click&vd_source=3c6744bb65e9c8801bd4bbae976fb9d8


图片裁剪 https://www.bilibili.com/video/BV1Gw411A7Dc/?spm_id_from=333.788&vd_source=3c6744bb65e9c8801bd4bbae976fb9d8