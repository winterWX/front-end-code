    
    let stringNum = 'ni hao a coderWx    ';

    const arrayNum = [];
    
    arrayNum.push(stringNum.trim());
    
    let lastArray = arrayNum.flatMap(item=>{
        return item.split(' ')
    })

    console.log('最后一个单词的长度',lastArray,lastArray[lastArray.length-1].length);




