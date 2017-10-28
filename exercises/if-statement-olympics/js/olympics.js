var num = 5 > 3;
if (num === true){
  console.log("is greater than")
}
var cat = 'cat';
if (cat.length === 3){
  console.log(cat.length + " is the length")
}


var cat = 'cat';
var dog = 'dog';
if (cat === dog){
    console.log("is equal to")
}else{
    console.log("not the same")
}


var person = {
  name: "Brandon",
  age: 12
}

if(person.age >= 18){
  console.log(person.name + " is allowed to go to the movie");
}else if(person.age < 18){
  console.log(person.name + " is not allowed to go to the movie");
}

var person = {
  name: "Brandon",
  age: 41
}
var str = " is allowed to go to the movie";
var str2 = " is not allowed to go to the movie";
//var B = str.startsWith("B");

if(person.name.startsWith("B") && person.age > 17){
    console.log(person.name + str);
}else{
    console.log(person.name + str2);
}


if (1 === '1') {
    console.log("strict")
  } else if (1 == '1') {
    console.log("abstract")
  } else {
    console.log("not equal at all")
}


if ( (1 <= 2) && (2 === 4) || (3 * 4 > 10) && (5 + 10 > 10) ) {
    console.log("yes")
} else{
    console.log("no")
}
