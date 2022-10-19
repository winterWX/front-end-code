<template>
    <div>
        <div>显示计算属性的结果 {{ numResult }}</div>
        <button @click="numAdd">num1+1</button>
        <div>显示vuex的数据 {{ paramsNum }}</div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'OptionComputed',
    data() {
        return {
            num1: 2,
            num2:3,
            object:{
                data:12,
                params:{
                   numData: 1
                }
            }
        };
    },
    computed:{
        ...mapState(['paramsNum']),
        numResult(){
            return this.num1 * this.num2
        }
    },

    watch:{
        num1:{
          handler(){
            console.log('111111')
          },
          immediate: true,
          deep:true
        },
        'object.params.numData':{
            handler(){
                console.log('2222')
            },
            immediate: true,
            deep:true
        }
    },

    mounted() {
        
    },

    methods: {
        numAdd(){
            this.num1++;
            this.object.params.numData++
        }
    },
};
</script>

<style lang="less" scoped>

</style>