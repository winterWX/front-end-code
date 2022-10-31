<template>
    <div class="">
        about ---- {{ id }}
    </div>
</template>
<script>
  import {useRoute,useRouter} from "vue-router";
  export default {
    name:'about', 
    // 组件内部守卫
    beforeRouteEnter (to, from, next) {
      // ...
    },
    beforeRouteLeave (to, from, next) {
      // ...
    },
    setup(props) {
        let route = useRoute();
        let { id } = route.params;
        console.log('router====',route.params.id);
        return { id }
    }
  }
</script>