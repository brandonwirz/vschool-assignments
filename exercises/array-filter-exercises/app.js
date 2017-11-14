//1) Filter all numbers out of the array that are less than 5
const numFilter = function(arr)  {
    const fiveAndGreaterOnly = arr.filter((num) => {
        return num >= 5;
    });
    return fiveAndGreaterOnly;
};

console.log(numFilter([3, 6, 8, 2])); // [6, 8]


//2) Filter all numbers out of the array that are odd
const evensOnly = function(arr) {
    const evenSkimmer = arr.filter((num) => {
        return num % 2 === 0;// %(modulo)
        return num % 3 === 0;// %(modulo)
    });
    return evenSkimmer;
};
console.log(evensOnly([3, 6, 8, 2])); // [6, 8, 2]
console.log(evensOnly([3, 6, 8, 2])); // [3, 6]


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
