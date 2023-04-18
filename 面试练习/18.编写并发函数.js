
/***
 * 
 *  并发请求函数
 * 
 *  @requestAll
 *  @urls
 *  @maxNum最大并发请求数
 * 
 * 
 */

function requestAll(urls, maxNum) {
    return new Promise((resolve, reject) => {
        let index = 0
        let counter = index
        let results = []
        async function requestSend() {
            // 判断请求的数量
            if (urls.length === 0) {
                resolve([])
                return
            }
            try {
                const rep = await request(urls[index])
                index++
                results[counter] = rep
            } catch (error) {
                index++
                results[counter] = error
            } finally {
                // 执行完每一个,不管成功或者失败都进行请求的发送
                counter++
                if (results.length === urls.length) {
                    resolve(results)
                }
            }
        }
        const sendNum = Math.min(urls.length, maxNum)
        for (let i = 0; i <= sendNum - 1; i++) {
            requestSend()
        }
    })
}


function request(url) {
    return axios.get(url)
}

