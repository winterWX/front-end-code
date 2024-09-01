import SparkMD5 from './sparkmd5.js'
export function createChunks(file,index,chunk_size){
    return new Promise((resolve,reject)=>{
        const start = index * chunk_size;
        const end = start + chunk_size;
        const spark = new SparkMD5.ArrayBuffer();
        const fileReader = new FileReader();
        const blob = file.slice(start,end);
        fileReader.onload = (e)=>{
            spark.append(e.target.result);
            resolve({
                start,
                end,
                hash: spark.end(),
                blob
            })
        }
        fileReader.readAsArrayBuffer(blob);
    })
}