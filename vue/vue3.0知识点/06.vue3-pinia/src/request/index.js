import axios from 'axios'

const server = axios.create({
    timeout: 4000
})

server.interceptors.request.use(config=>{

})

server.interceptors.response.use(res=>{
    
})