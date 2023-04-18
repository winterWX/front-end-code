import Axios from 'axios'
async function useDeLoadText() {
    let url = 'https://duyi-static.oss-cn-beijing.aliyuncs.com/files/novel.txt'
    let resp = await fetch(url);
    const reader = resp.body.getReader()
}

export default useDeLoadText