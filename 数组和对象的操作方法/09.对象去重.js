const arr = [{id: 1, name:'11'},{id: 1, name:'11'},{id: 2, name:'11'}]

const map = new Map();

arr.forEach(element => {
    map.set(element.id, element);
});

console.log('map===', map.values());