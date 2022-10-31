
<template>
 <div>{{ son }}</div>
 <ul>
   <li v-for="(item,index) in books.list" :key="index">{{item.title}}</li>
 </ul>
</template>

<script setup lang="ts">

import { reactive , onMounted } from 'vue';
import { useStore } from 'vuex';

const books = reactive({list:[]});

onMounted(() => {
    let store = useStore();
    store.dispatch('footer/getBannerList').then(res=>{
        books.list = res;
    })
});

</script>
