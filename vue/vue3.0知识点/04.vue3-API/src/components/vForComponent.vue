<template>
    <div>
        <ul>
            <li v-for="item in objVal" :key="item">
                {{ item }}
            </li>
        </ul>
        <ul>
            <li v-for="n in 10" :key="n">{{ n }}</li>
        </ul>
    </div>
</template>

<script setup lang="ts">
    import { reactive } from 'vue'
    const  objVal = reactive({
        title: 'How to do lists in Vue',
        author: 'Jane Doe',
        publishedAt: '2016-04-10'
    })


</script>