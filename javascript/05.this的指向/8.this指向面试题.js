var names = 'window person';
const person = {
    names: 'object person',
    sayNamePerson() {
        console.log(this.names);
    },
    sayArrowPerson: () => {
        console.log(this.names);
    },
};
const sayNamePerson = person.sayNamePerson;
sayNamePerson();    // 1     
person.sayNamePerson(); // 2 
person.sayArrowPerson(); // 3  
sayNamePerson.call(window); // 4 
person.sayArrowPerson.call(person); 