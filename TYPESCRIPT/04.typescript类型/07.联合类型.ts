// 联合类型的使用

function hancenChange(id: number| string| boolean){
  switch (typeof id) {
        case 'number':
          console.log('答应number',id)
          break;
        case 'string':
          console.log('答应string',id)
          break;
        case 'boolean':
          console.log('答应boolean',id)
          break;
      default:
          break;
  }
}

hancenChange(12)
hancenChange('ab')
hancenChange(false)