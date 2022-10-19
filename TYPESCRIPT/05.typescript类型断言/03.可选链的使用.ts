type Person={
    name:string,
    friend?:{
      name: string,
      age?: number
    }
}

const info: Person={
    name:'wx',
    friend:{
        name:'刘德华',
        //age:40
    }
}

function typePerson(point:info){
  console.log(info);
}