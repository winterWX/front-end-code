<template>
    <div><h2>实现拖拽组件的封装</h2></div>
    <div class="parks-main">
        <div 
            v-for="(item,index) in parksList" 
            :key="item.id"
            class="parks-block"
            :style="{'background-color': colorLists[Math.floor(Math.random()*10)]}"
            draggable="true"
            @dragstart="dragstart(index, $event)"
            @drag="dragActive($event)"
            >
            <span>{{item.name}}</span>
        </div>
    </div>
</template>
<script setup>
import { ref, reactive } from 'vue'
const parksList = reactive([
    { name: '卡片1', id: 0 },
    { name: '卡片2', id: 1 },
    { name: '卡片3', id: 2 },
    { name: '卡片4', id: 3 },
    { name: '卡片5', id: 4 },
    { name: '卡片6', id: 5 },
    { name: '卡片7', id: 6 },
    { name: '卡片8', id: 7 },
    { name: '卡片9', id: 8 },
    { name: '卡片10', id: 9 },  
    { name: '卡片11', id: 10 },
    { name: '卡片12', id: 11 },
    { name: '卡片13', id: 10 },
    { name: '卡片14', id: 11 }
])
const colorLists= reactive( [
    'hsl(42, 48%, 54%)',
    'hsl(138, 24%, 48%)',
    'rgb(200, 138, 131)',
    'rgb(84, 221, 226)',
    'rgb(178, 199, 168)',
    'rgb(16, 195, 195)',
    'hsl(0, 21%, 68%)',
    'rgb(226, 166, 198)',
    'hsl(278, 17%, 66%)',
    'rgb(153, 199, 235)',
    'blueviolet'
])
// 拖动时触发
const dragstart = (index,e) => {
    console.log('=====', index,e)
}
//开始拖动
const dragActive = (e) => {
    console.log('e======', e)
}
</script>
<style lang="less">
    .parks-main{
        display: flex;
        justify-content: start;
        align-content:flex-start;
        flex-wrap: wrap;
        background-color:  #eee;
        height: 400px;
        width: 80%;
        padding: 10px;
        .parks-block{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100px;
            height: 100px;
            margin: 5px;
            border: 1px solid darkgrey;
            box-shadow: 1.5px 1.5px 1.5px 1.5px rgba(0, 0, 0, .3);   
            //<!-- animation: shake 1s 0.15s linear infinite; -->
        }
    }
    @keyframes shake {
    10% {
        transform: rotate(15deg);
    }
    20% {
        transform: rotate(-10deg);
    }
    30% {
        transform: rotate(5deg);
    }
    40% {
        transform: rotate(-5deg);
    }
    50%,
    100% {
        transform: rotate(0deg);
    }
    }
</style>