//Methods in arrays

const persons = [
   {name: 'Hermes', age: 30, learning: 'javascript'},
   {name: 'Alexis', age: 20, learning: 'Ruby'}, 
   {name: 'Juan', age: 32, learning: 'React'}, 
   {name: 'Pepa', age: 24, learning: 'c#'}, 
   {name: 'Camila', age: 28, learning: 'Css'}, 
   {name: 'Gonzalo', age: 25, learning: 'Rails'} 
]

console.log(persons);

// Higher that 28 years

const higher = persons.filter(person => {
    return person.age > 25;
});

//console.log(higher);

// What is learning Hermes?
const hermes = persons.find(person => {
    return person.name === 'Hermes';
});

let total = persons.reduce((totalAge, person) =>{
    return totalAge + person.age;
}, 0);

console.log(total);

//average
console.log(total / persons.length);