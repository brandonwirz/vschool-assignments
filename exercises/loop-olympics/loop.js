for (var i = 0; i > 10; i++){
  console.log(i)
}

for (var i = 9; i <= 0; i--){
  console.log(i)
}

var fruit = ["banana", "orange", "apple", "kiwi"]
for(i = 0; i < fruit.length; i++){
    console.log(fruit[i]);
}


var array = [];
var nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var i = 0; i < nums.length; i++){
    //console.log(num[i]);
    //array += nums[i];
    array.push(nums[i]);
    //array.push(num[i]);
}
console.log(array);


myText += colors[i].toString() + " ";

var myText = "";
for (var i = 0; i < colors.length; i++){
    myText += colors[i].toString() + " ";
}


for (i = 0; i < 102; i += 2){
  console.log(i)
}


var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"];
for(i = 1; i < fruit.length; i+= 2){
  console.log(fruit[i]);
}



var peopleArray = [
  {
    name: "Harrison Ford",
    occupation: "Actor"
  },
  {
    name: "Justin Beiber",
    occupation: "Singer"
  },
  {
    name: "Vladmir Putin",
    occupation: "Politition"
  },
  {
    name: "Oprah",
    occupation: "Entertainer"
  }
]

var array = [];
for (var i = 0; i < peopleArray.length; i++){
    array.push(peopleArray[i].name);
}
console.log(array);



var names= [];
var occupations= [];
for (var i = 0; i < peopleArray.length; i++){
    names.push(peopleArray[i].name);
    occupations.push(peopleArray[i].occupation);
}
console.log(names);
console.log(occupations);



var matrix = [];
for (var i = 0; i < 3; i++){
  matrix[i] = [];
  for (var j = 0;j < 3; j++ ){
    matrix[i][j] = 0;
  }
}
console.log(matrix);
