/***
 *  并发请求函数
 *  @requestAll
 *  @urls
 *  @maxNum最大并发请求数
*/

function requestAll(urls, maxNum = 4){
    return new Promise((resolve)=>{
        if(urls.length === 0){
            resolve();
            return;
        };
        let taskIndex = 0;
        let taskFinish = 0;
        const results = [];
        const _run = async()=>{
            const task = urls[taskIndex];
            taskIndex++;
            const res = await task();
            results.push(res);
            taskFinish ++;
            if(taskIndex < urls.length){
                _run();
            }else if(taskFinish === urls.length){
                resolve(results);
            }
        };
        for(let i = 0; i < maxNum && i < urls.length; i++){ _run() };
    });
};

