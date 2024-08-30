// 函数重载
/**
 *  1.同一个函数多处调用时，接收不同个数或者不同类型的参数
 *  
 *     分两步
 *          1.重载签名  -- 没有函数体
 *          2.实体签名  -- 有函数体
*/

type MessageType = "image" | "audio" | string; //消息类型
type Message = {
    id: number;
    type: MessageType;
    sendMessage: string;
};

let messages: Message[] = [
    {
      id: 1, type: 'image', sendMessage: "你好啊,今晚咱们一起去三里屯吧",
    },
    {
      id: 2, type: 'audio', sendMessage: "朝辞白帝彩云间，千里江陵一日还"
    },
    {
      id: 3, type: 'audio', sendMessage: "你好！张无忌"
    },
    {
      id: 4, type: 'image', sendMessage: "刘老根苦练舞台绝技！"
    },
    {
      id: 5, type: 'image', sendMessage: "今晚王牌对王牌节目咋样?"
    }
]

// 重载签名可以有多个
function getMessage(value: number, myName: string): Message //第一个根据数字id来查询单个消息的 重载签名
function getMessage(value: MessageType, readRecordCount: number): Message[] //第二个根据消息类型来查询消息数组的 重载签名

// 实现签名函数，只有实现签名才有函数体，实现签名只有一个
function getMessage(value: number | MessageType, value2: string | number) {
  //console.log(myName)
  if (typeof value === "number") {
    return messages.find((msg) => { return 6 === msg.id })//undefined
  } else {
    //return messages.filter((msg) => { return value === msg.type })
    if(typeof value2 === 'string') {
        value2 = Number(value2);
    }
    return messages.filter((msg) => value === msg.type).splice(0, value2)
  }
}

getMessage(1, "df") // 这里调用的是第一个重载签名
// let x: number = 3;
// let y: any = x;

// let z: any = 3;
// let k: number = z;

// function go(value:number,readRecordCount:number=1){

// }
// go(1);


//console.log(getMessage(6).sendmessage); 根据传参，判断为第一个重载签名，所以这里的sendmessage可以正常调用，不需要类型转换
getMessage("image", 2).forEach((msg) => {
  console.log(msg);
})

export { }

