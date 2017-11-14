//Use the Rest Operator to help this function return an array
//of animals, no matter how many animals are passed to it
function collectAnimals(...args) {
  return args;
}
collectAnimals("dog", "cat", "mouse", "jackolope", "platypus");


//Make a food object with the array names as properties using Object Literals:
const fruit = ["apple", "pear"];
const sweets = ["cake", "pie"];
const vegetables = ["carrot"];

const food = {fruit, sweets, vegetables};
console.log(food);


//Use destructuring to fill in the blanks and use the property names as variables:
const vacation = {
   location: "Burly Idaho",
   duration: "2 weeks"
 };

let {location, duration} = vacation;
console.log(`We're going to have a good time in ${location} for ${duration}`);


//Use destructuring to make this code ES6: const firstItem = items[0];
// const career = {
//   title: `Developer`,
//   field: `Development`
// }
//
// function isDeveloper({title, field}) {
//   return title === 'Developer' && field === 'Development';
// }
// 
// console.log(isDeveloper(career));


let items = ['first', 'second', 'third', 'fourth'];
const [firstItem, secondItem, ...rest] = items;
console.log(firstItem);
console.log(secondItem);


//Write destructuring code to assign variables that will help us print the expected string.
//Also, change the string to be using Template literals:
const favoriteActivitiesInOrder = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];
const [first, second, third] = favoriteActivitiesInOrder;

console.log(`My top three favorite activities are, ${first}, ${second}", and ${third}`);




// Use the Rest and Spread Operator to help take any number of arrays, and return one array.
// You will need to change how the arrays are passed in.
function combineAnimals(arr1, arr2, arr3) {
  return [...arr1,...arr2,...arr3];
}

const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];

combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals);



//Make the following function more ES6xy:
function product(a, b, c, d, e) {
  var numbers = [a,b,c,d,e];

  return numbers.reduce(function(acc, number) {
    return acc * number;
  }, 1)
}

//ES6xy
function product(...nums) {
  return nums.reduce((acc, nums)=> {
    return acc * nums;
  }, 1)
};
console.log(product(1,2,3,4,5));


//Make the following function more ES6xy.
//Use at least both the rest and spread operators
function unshift(array, a, b, c, d, e) {
  return [a, b, c, d, e].concat(array);
}

//ES6xy
const unshift = (array, ...arr2) => {
  return [...arr2, ...array];
}

console.log(unshift([1, 2, 3], 1, 2, 3, 4, 5));




//Write some destructuring code to help this function out.
//Use object literals to simplify it:
// function populatePeople(names){
//     return names.map(function(name){
//         name = name.split(" ");
//         // your code
//         return {
//             firstName: firstName,
//             lastName: lastName
//         }
// }

//ES6xy
const populatePeople = names => {
  return names.map(name => {
    name = name.split(" ");
    let [firstName, lastName] = name;
    return {firstName, lastName};
  });
}
console.log(populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"]));
