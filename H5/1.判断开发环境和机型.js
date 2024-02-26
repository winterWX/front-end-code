var en = window.navigator.userAgent.toLocaleLowerCase();

if(en.match(/(iPhone|iPod|iPad);?/i)){
    // ios 手机
}else if(en.match(/android/i)){
    // 安卓 手机
}


if(en.match(MicroMessenger/i) == 'micromessenger'){
   // 微信里
}else if(en.match(/isapp/i) == 'isapp'){
   // 其他浏览器
}else{
   // 其他的浏览器
}