
function paramsChange(point: {x:number,y:number,z?:number}){
  console.log('point.x',point.x);
  console.log('point.y',point.y);
  console.log('point.z',point.z);
}

paramsChange({x:12,y:23});