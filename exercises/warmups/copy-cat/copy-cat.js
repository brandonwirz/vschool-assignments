// Write a function that takes an object as a
// parameter and returns a copy. The new object
// should have all the same properties and
// values of the original. In the spirit of
// Pure Functions, your function should not
// modify the original object.

// function copyCat(obj){
//     const copy = {};
//     for (let prop in obj) {//every prop in obj prop has value
//         copy[prop] = obj[prop]
//     }
//     return copy
// }

function copyCat(obj){
    return Object.assign({}, obj);//returns new object
}

const person = {name: "Joe"}
const copy = copyCat(person);

console.log(person.name) // "Joe"
console.log(copy.name)  // "Joe"

person.name = "Jane"

console.log(person.name) // "Jane"
console.log(copy.name)  // "Joe"

// Joe
// Joe
// Jane
// Joe
