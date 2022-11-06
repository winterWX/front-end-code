
const h =(type,props,children)=>{
	return {
		type,
		props,
		children
	}
}

const mount=(vnode,container)=>{
	// 通过vnode创建真实的 dom 节点(Element) 
	let el = vnode.el = document.createElement(vnode.type); 
	
	// 处理props
	if(vnode.props){
		for(let key in vnode.props){
			if(key.startsWith('on')){  // 对事件的处理
				el.addEventListener(key.slice(2).toLowerCase(),vnode.props[key]);
			}else{
				el.setAttribute(key,vnode.props[key]);
			}
		}
	}
	
	if(vnode.children){
		if(typeof vnode.children === 'string'){
			el.textContent = vnode.children;
		}else{
			vnode.children.forEach(item=>{
				mount(item,el)
			})
		}
	}
	
	container.appendChild(el);
}


const patch=(n1,n2)=>{
  // 第一步 判断 type是否一样;
  if(n1.type !== n2.type){
     let n1ParentElent = n1.el.parentElement;  //拿到节点的父元素
	 n1ParentElent.removeChild(n1.el); //根据父元素移除子节点
	 mount(n2,n1ParentElent);  //递归挂载
  }else{
	 let el = n2.le = n1.el;
	 const oldProps = n1.props || {};
	 const newProps = n2.props || {};
	 
	//获取新的props 更新到 el
	for(let key in newProps){
		const oldValue = oldProps[key];
		const newValue = newProps[key];
		
		if(oldValue !== newValue){
			if(key.startsWith('on')){
				el.addEventListener(key.slice(2).toLowerCase(),newValue);
			}else{
				el.setAttribute(key,newValue);
			}
		}
	}
	 
	//移除旧的props
	for(let key in oldProps){
		 if(!(key in newProps)){
			 if(key.startsWith('on')){
			 	el.removeEventListener(key.slice(2).toLowerCase(),oldProps[key]);
			 }else{
			 	el.removeAttribute(key);
			 }
		 }
	}
	 
	 
	//处理第三个参数 数组部分
	const oldChildren = n1.oldChildren || [];
	const newChildren = n2.newChildren || [];
	
	//两个都是字符串
	if(typeof newChildren === 'string'){   
		if(typeof oldChildren === 'string'){
			el.textContent = newChildren;
		}else{
			el.innerHTML = newChildren;
		}
	}else{ 
		// 情况一: newChildren就是一个数组;
		if(typeof oldChildren === 'string'){
			el.innerHTML = '';
	        newChildren.forEach(item=>{
				mount(item,el)
			})
		}else{  //两个都是一个数组
		    const commonLength = Math.min(oldChildren.length,newChildren.length);
			for(let i = 0 ; i < commonLength.length; i++){
				path(oldChildren[i],newChildren[i])
			}
			
			if(newChildren.length > oldChildren.length){
				newChildren.slice(oldChildren.length).forEach(item,el=>{
					mount(item,el)
				})
			}
			
			if(oldChildren.length > newChildren.length){
				oldChildren.slice(newChildren.length).forEach(item,el=>{
					el.removeChild(item.el);
				})
			}
		}
	}
	
  }

}

[2,3,4,5,6,7,8,9,0]
[3,4,5,5,5,5,5]


/**
 * 
 * 
 *  相同点：
 *		Vue和react的diff算法，都是不进行跨层级比较，只做同级比较。
 *
 *		不同点：
 *
 *		1.Vue进行diff时，调用patch打补丁函数，一边比较一边给真实的DOM打补丁
 *		2.Vue对比节点，当节点元素类型相同，但是className不同时，认为是不同类型的元素，删除重新创建，而react则认为是同类型节点，进行修改操作
 *		3.① Vue的列表比对，采用从两端到中间的方式，旧集合和新集合两端各存在两个指针，两两进行比较，如果匹配上了就按照新集合去调整旧集合，每次对比结束后，指针向队列中间移动；
 *		②而react则是从左往右依次对比，利用元素的index和标识lastIndex进行比较，如果满足index < lastIndex就移动元素，删除和添加则各自按照规则调整；
 *		③当一个集合把最后一个节点移动到最前面，react会把前面的节点依次向后移动，而Vue只会把最后一个节点放在最前面，这样的操作来看，Vue的diff性能是高于react的
 *
 * 
 * 
 * 
 */