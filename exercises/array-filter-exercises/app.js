//The filter() method creates a new array with all elements that
//pass the test implemented by the provided function.

//1) Filter all numbers out of the array that are less than 5
const numFilter = function(arr){
    const greaterThanFive = arr.filter((num)=>{
      return num >= 5
    });
    return greaterThanFive
}

console.log(numFilter([3, 6, 8, 2, 1, 0, 12])); //


//2) Filter all numbers out of the array that are odd
const evensOnly = function(arr) {
    const evenSkim = arr.filter((num) => {
        return num % 2 === 0;
    });
    return evenSkim;
};
console.log(evensOnly([3, 6, 8, 2]));

// var value = 3
// var arr = [1, 2, 3, 4, 5, 3]
// arr = arr.filter(function(item) {
//     return item !== value
// })
// console.log(arr)
// [ 1, 2, 4, 5 ]

//3) Filter all strings out of the array that are less than 5 characters long
const fiveCharactersAndLessOnly = function(arr) {
    // const checksFiveAndLess = arr.filter(function(string) {
    const checksFiveAndLess = arr.filter((string) => {
        return string.length <= 5;
    });
    return checksFiveAndLess;
};
console.log(fiveCharactersAndLessOnly(["dog", "wolf", "by", "family", "eaten", "camping"]) )// ["dog", "wolf", "by", "eaten"]


//4) Filter out all the people who do not belong to the club
const peopleWhoBelongToTheIlluminati = function(arr) {
    const isIlluminati = arr.filter((person) => {
        return person.member;
    });
    return isIlluminati;
}

console.log(peopleWhoBelongToTheIlluminati([
  {
    name: "Angelina Jolie",
    member: true
  },{
    name: "Eric Jones",
    member: false
  },{
    name: "Paris Hilton",
    member: true
  },{
    name: "Kayne West",
    member: false
  },{
    name: "Bob Ziroll",
    member: true
  }
]));


//5) Filter out all the people who are not old enough to see 'The Matrix' (18)
const ofAge = function(arr) {
    const ageChecker = arr.filter((person) => {
        return person.age >= 18;
    });
    return ageChecker;
}

console.log(ofAge([
  {
    name: "Angelina Jolie",
    age: 80
  },{
    name: "Eric Jones",
    age: 2
  },{
    name: "Paris Hilton",
    age: 5
  },{
    name: "Kayne West",
    age: 16
  },{
    name: "Bob Ziroll",
    age: 100
  }
]));
