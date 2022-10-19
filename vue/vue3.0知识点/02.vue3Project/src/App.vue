<template>
	<keep-alive-component/>
    <!-- <this-use-component/> -->
    <!-- <parent-component /> -->
	<!-- <use-transition/> -->
	<!-- <anmations /> -->
	<!-- <setup-use-in-component /> -->
	<!-- <ref-use-component/> -->
	<!-- <reactive-use-component /> -->
	<!-- <readonly-use-component/> -->
	<!-- <watch-use-component/> -->
	<!-- <watch-use-effect/> -->
	<!-- <mixin-use-component/> -->
	<!-- <slot-component/> -->
	<!-- <componsition/> -->
</template>

<script>
    import keepAliveComponent from './components/05.keep-alive的使用/index.vue'
	// import thisUseComponent from './components/01.组件this问题/thisUseComponent.vue'
	// import  parentComponent from './components/03.跨组件事件总线传递/parentComponent.vue'
	// import useTransition from './components/14.动画/useTransiton.vue'

	// import anmations from './components/14.动画/anmation动画.vue'

	// import setupUseInComponent from './components/30.compositionAPI/01.setup的用法.vue'

	// import refUseComponent from './components/30.compositionAPI/02.ref的用法.vue'
	// import reactiveUseComponent from './components/30.compositionAPI/03.reactive的用法.vue'

	// import readonlyUseComponent from './components/30.compositionAPI/04.readonly的用法.vue'

	// import watchUseComponent from './components/30.compositionAPI/04.watch的使用方法/01.watch侦听ref响应式数据.vue'
	// import watchUseComponent from './components/30.compositionAPI/04.watch的使用方法/02.watch侦听reactive响应式数据.vue'
	
	
	// import watchUseEffect from "./components/30.compositionAPI/06.watchEffect的使用.vue"
	
	// import mixinUseComponent from './components/30.compositionAPI/07.mixin的用法.vue'
	
    // import componsition from './components/30.compositionAPI/08.provide和inject的使用/01.index.vue'
	
	// import componsition from './components/30.compositionAPI/09.vue组件的分装/index.vue'

    //  作用域插槽
	//  import slotComponent from "./components/30.compositionAPI/10.插槽的使用/01.slot的简单使用/index.vue" 
	//	import slotComponent from "./components/30.compositionAPI/10.插槽的使用/02.slot具名插槽/index.vue" 
	
	//	import slotComponent from "./components/30.compositionAPI/10.插槽的使用/03.slot作用域插槽/index.vue"
		export default {
			name: 'App',
			components: {
				  keepAliveComponent
				  //thisUseComponent
				  //parentComponent
				  //useTransition
				  //anmations
				  //setupUseInComponent
				  //refUseComponent
				  //reactiveUseComponent
				  //readonlyUseComponent
				  //watchUseComponent
				  //watchUseEffect
				  //mixinUseComponent
				  //componsition
				  //slotComponent
			}
		}

</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>