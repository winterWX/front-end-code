export const mixinComponsition = {
	data(){
		return{
			mixinData: 'mixin',
			age:0
		}
	},
	
	methods:{ 
		mixinFun(){
			this.age ++;
			this.mixinData = `${this.mixinData}111`;
		}
	}
}