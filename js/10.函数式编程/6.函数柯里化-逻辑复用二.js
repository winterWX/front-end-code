var lastRes = date => type => message =>{
    console.log(`[${date.getHours()}:${date.getMinutes()}][${type}]:[${message}]`) 
}

var logs = lastRes(new Date())

logs('debugger')('5s后')
logs('debugger===')('6s后')