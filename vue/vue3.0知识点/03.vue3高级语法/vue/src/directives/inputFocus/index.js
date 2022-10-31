export default function(app){
   app.directive('focus',{
	   mounted(el,bindings,Vnode,preVnode){
	   		el.focus();
	   }
   })
}
