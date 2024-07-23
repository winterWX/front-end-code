console.log(Object.entries(['aa','bb','cc']))  
//会将数组的下标做为key [['0','aa'],['1','bb'],['2','cc']]

console.log(Object.entries('hello')) 
//会将数组的下标做为key,然后值会分割字符串 [['0','h'],['1','e'],['2','l'],['3','l'],['4','o']]