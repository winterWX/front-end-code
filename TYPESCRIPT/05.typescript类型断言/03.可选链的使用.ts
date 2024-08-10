type person = {
    name:string,
    friend?:{
      name: string,
      age?: number
    }
}

function typePerson(point: person): void{
  console.log('打印结果',point.name);
}

typePerson({
  name: '测试'
})

