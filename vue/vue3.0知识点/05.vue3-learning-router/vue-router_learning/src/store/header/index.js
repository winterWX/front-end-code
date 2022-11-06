const header = {
    namespaced: true,
    state:{
        books:[
            {name:'三国', price:10, count:1},
            {name:'水浒', price:20, count:2},
            {name:'西游记', price:30, count:3},
            {name:'红楼梦', price:40, count:4}
         ]
    },
    mutations:{

    },
    actions:{

    },
    getters:{
      // 计算书的价格的总和
      totalPrice(state){
        let totals  = 0;
        state.books.forEach((item)=>{
           totals += item.price
        })
        return totals
     },

     selectCount(state){
        return function(num){
           let items = state.books.filter(item=> item.count > num)
           let totals  = 0;
           items.forEach((item)=>{
              totals += item.price
           })
           return totals
        }
     }
    }
}

export default header