
<template>
    <div>shallowReadonly 的使用</div>
</template>
<script lang="ts" setup>
import { shallowReadonly ,isReadonly} from 'vue';
const state = shallowReadonly({
  foo: 1,
  nested: {
    bar: 2
  }
})

// 更改状态自身的属性会失败
state.foo++

// ...但可以更改下层嵌套对象
isReadonly(state.nested) // false

// 这是可以通过的
state.nested.bar++

</script>