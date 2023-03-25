<template>
    <div>
        <h3>子组件修改, 修改props值的情况</h3>
    </div>
</template>
<script setup lang="ts">

// 父组件传递给子组件props值时，子组件需要修改时

/**
 * 
 *   方式一： 
 *   const returnProps = defineProps(['test'])
 * 
 *   // 作用为一个局部的变量
 *   const lastProps = ref(returnProps.test)  //此时对props进行修改就不受影响
 *   
 * 
 * 
 *   方式二：
 *   // 需要对props做进一步的转换
 * 
 *   const parentProps = defineProps(['size'])
 * 
 *   const lastChange = computed(()=> parentProps.trim().toLowerCase())
 * 
 * 
 * 
 *   注意： 父组件传递给子组件的值为数组和对象类型时，其实在子组件里是可以修改里面的属性的，因为是引用类型。
 *      但是一般不会这样做，这样会使得数据变的难以理解。 子组件想修改父组的值，可以抛出事件到父组组件
 *       父组件接收事件后，自己进行修改。
 *  
 * 
 */

</script>>