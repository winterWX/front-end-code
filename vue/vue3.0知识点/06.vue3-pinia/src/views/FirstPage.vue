<!-- 实现虚拟列表：
1. 不把长列表数据一次性渲染在页面上
2. 截取一部分数据来填充屏幕容器区域
3. 长列表不可视区域使用空白占位符
4. 监听滚动事件根据滚动位置动态改变可视区域
5. 监听滚动事件根据滚动位置动态改变空白填充 
-->

<template>
    <div class="scroll-container">
        <ul class="main_ul" :style="{height: screenNum + 'px'}"  @scroll="(e)=>{scrollDomShow(e)}">
            <li class="list_li" v-for="(item,index) in showItemList" :key="index">
                <div class="content">
                    <h3>{{item.title}}</h3>
                    <span>{{item.decr}}</span>
                </div>
            </li>
        </ul>
    </div>
</template>
<script lang="ts" setup>
import { computed, onMounted, reactive,ref, watch } from 'vue';
const scrollStart  = ref(0)
const scrollEnd  = ref(0)
const initPage = reactive( { list: Array(1000).fill({
    title:'我是列表标题',
    decr:'我是描述我是描述我是描述我是描述我是描述我是描述我是描述我是描述.............'}),
    screenItem: []
    }
)
const screenNum = ref(0)

const showContent = computed(()=> Math.ceil(screenNum.value / 80) )
console.log('showContent',showContent)
// 截取后的列表
const showItemList = computed(()=> initPage.list.slice(scrollStart.value, showContent.value) )

watch(scrollStart,(newVal,oldVal)=>{
    const sliceList = initPage.list.slice(newVal, showContent.value)
    console.log('sliceList',sliceList)
    initPage.screenItem = [...sliceList]
},{immediate : true})

onMounted(()=>{
    // 获取屏幕高度
    screenNum.value = window.innerHeight
})

const scrollDomShow = (e)=>{
    console.log('e.target.scrollTop',e.target.scrollTop)
    scrollStart.value = e.target.scrollTop
    console.log('scrollStart.value====',scrollStart.value)
}

</script>

<style scoped>
.main_ul{
    background-color: #fff;
    height: 100%;
}
.list_li{
    list-style: none;
    padding: 10px 0px;
    height:  60px;
}
.content{
    background-color: cadetblue;
}
.scroll-container{
    overflow-y: scroll;
}
</style>