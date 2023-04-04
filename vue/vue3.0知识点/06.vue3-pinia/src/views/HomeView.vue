<script setup>
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <div>
    <main>
      <TheWelcome />
    </main>
    <div class="piniaContent">{{ count }}- {{double}}</div>
    <button @click="increment()">点击事件</button>
    <button @click="mostKeyChange()">变更多个属性</button>
  </div>
</template>
<script>
import { mapStores, mapState,mapActions,mapGetters,mapWritableState } from 'pinia'
import { userHomeStore } from '../stores/home'
export default {
  computed: {
    // 其他计算属性
    // ...
    // 允许访问 this.counterStore 和 this.userStore
    ...mapStores(userHomeStore),
    // 允许读取 this.count 和 this.double
    ...mapState(userHomeStore, ['count']),
    ...mapGetters(userHomeStore,['double']),
    ...mapWritableState(userHomeStore,['count'])
  },
  methods: {
    // 允许读取 this.increment()
    ...mapActions(userHomeStore, ['increment']),
    mostKeyChange(){
      let store = userHomeStore() //拿到返回值
      // 方式一
      store.$patch({
          count: 100000,
          increment: 100000
      })
      // 方式二
      store.$patch((state)=>{
        state.count = 'Symbol',
        state.increment = '=='
      })
      store.$subscribe((mutations,state)=>{
        // mutations, events包含新的值和旧的值，payload改变后的对象，store的id，改变的类型
        // state 代理对象
          console.log(mutations,state)
      })
    }
  },
  mounted(){

  }
}
</script>
