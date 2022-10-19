import {ref, computed, watch} from 'vue';

const useCounter = ()=>{
   let counter = ref(0);
  
   const counterChange = ()=>{
	   counter.value++;
   }
   const counterVal = computed(()=> counter.value*2);
   
   return {
	   counter,
	   counterVal,
	   counterChange
   }
}


const useTitle = (e)=>{
	let title = ref(e);
	watch(title,(newVal)=>{
	    document.title = newVal;
	},{
		immediate:true
	})
	
	return{
		title
	}
}


export {
	useCounter,
	useTitle
}