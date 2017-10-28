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
