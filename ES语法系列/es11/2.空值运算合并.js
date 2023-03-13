/**  空值合并运算符  */

let  foo = 0   // 0 和 '' 被当作 非 undefined/null

let  bar = foo ?? 'default value'  //用于判断是 undefined/null时

// bar 的值是 0