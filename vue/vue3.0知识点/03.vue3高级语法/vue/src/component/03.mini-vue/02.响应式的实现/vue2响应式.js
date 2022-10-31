    const targetMap = new WeakMap();
	let activeEffect = null;

	class Dep{
		constructor() {
			this.subscribers = new Set(); //依赖的集合
		}
		depend(){
			if(activeEffect){
				this.subscribers.add(activeEffect);
			}
		}
		notify(){
			this.subscribers.forEach(effect=>{
				effect();
			})
		}
	}

    // map {{key : value}}   // 键值对的形式，key必须是字符串
	// weakMap {{ object : value }}  // key 必须是对象

	function getDep(target,key){
		// 1.根据对象(target)取出 对应的Map对象
		let depsMap = targetMap.get(target);
		
		if(!depsMap){
			depsMap = new Map();
			targetMap.set(target,depsMap);
		}

		// 2.取出具体的dep对象
		let dep = depsMap.get(key);
	    if(!dep){
			dep = new Dep();
			depsMap.set(key,dep)
		}
		return dep;
	}

    // vue2 对 raw 进行劫持
	function reactive(raw){
		Object.keys(raw).forEach(key=>{
			const dep = getDep(raw,key);
			let value = raw[key];
			Object.defineProperty(raw,key,{
				get(){
					dep.depend();
					return value;
				},
				set(newValue){
					if(value !== newValue){
						value = newValue;
						dep.notify();
					}
				}
			})
		})
		return raw;
	}
	
	function watchEffect(effect){
		activeEffect = effect;
		effect();
		activeEffect = null;
	}

	let info= reactive({ counter: 100, name: 'wx'});
	let foo = reactive({ height: 1.88});

	watchEffect(function doubleCounter(){
		console.log('counter>1111',info.counter*88);
	});

	watchEffect(function doubleCounter(){
		console.log('counter/name>2222',info.counter + '' + '' + info.name);
	});

	watchEffect(function doubleCounter(){
		console.log('height>333',foo.height);
	});

	info.counter++ ; 
	info.name = '牛牛';
	foo.height = 0;
