
# 虚拟Dom

   1. jsx通过babel会转化成 React.createElement, 就生成相应的ReactElement对象就是所谓的虚拟DOM,会将虚拟Dom转化成真实Dom,内存中就会将这个虚拟DOM缓存下来。


   2.当state和props发生变化时,render函数就会生成虚拟Dom,新旧Dom进行diff对比，计算出差异,patch以打补形式更新Dom,用新的虚拟DOM更新到真实Dom上

