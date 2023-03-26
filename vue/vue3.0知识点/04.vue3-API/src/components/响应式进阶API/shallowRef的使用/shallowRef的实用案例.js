const shallowArray = shallowRef([
    /* 巨大的列表，里面包含深层的对象 */
  ])
  
  // 这不会触发更新...
  shallowArray.value.push(newObject)
  // 这才会触发更新
  shallowArray.value = [...shallowArray.value, newObject]
  
  // 这不会触发更新...
  shallowArray.value[0].foo = 1
  // 这才会触发更新
  shallowArray.value = [
    {
      ...shallowArray.value[0],
      foo: 1
    },
    ...shallowArray.value.slice(1)
  ]
  