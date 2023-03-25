<template>
    <div>
        <cssModule-page/>
        <scopeStyle/>
        <useCssModule-page/>
    </div>
</template>
<script setup lang="ts">
import scopeStyle from './scope-style.vue'
import cssModulePage from './css-module.vue'
import useCssModulePage from './useCssModule.vue'
import { useCssModule } from 'vue'

useCssModule()

</script>

<style module>
    .p{
        color: darkmagenta;
        font-size: 100px;
    }
</style>