import { createChunks } from './createChunks.js'
export async function postMessage(e){
    const {
        files,
        chunk_size,
        startIndex,
        endIndex
    } = e.data;
    const promiseTotals = [];
    for(let i= startIndex; i< endIndex; i++){
        promiseTotals.push(createChunks(files,i,chunk_size))
    }
    const chunks = await Promise.all(promiseTotals);
    postMessage(chunks);
}