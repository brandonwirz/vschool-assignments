students = {
  name: "Ted",
  age: 29,
  computers:["pc", "mac", "tablet"],
  isFull: true,
  hello: function(){
    console.log("Hello " + this.name);
  }
};

console.log(students.name);
console.log(students.age);
console.log(students.computers[1]);
console.log(students.isFull);
console.log(students.hello());


// Make an array of 4 student objects with the following properties
//
// name
// age
// and the following data types:
//
// array
// boolean
// Print each student's name and age to the console
