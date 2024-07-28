import axios from "axios";
const source= axios.cancelToken.source();
axios.get('/api/data',{
    cancelToken: source.token
}).then((result) => {
    
}).catch((err) => {
    
});

source.cancel();