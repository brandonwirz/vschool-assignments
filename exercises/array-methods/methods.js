var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

vegetables.pop();
fruit.shift();

var orangeItem = fruit.indexOf('orange');
fruit.push(orangeItem);

var vegLength = vegetables.length;
vegetables.push(vegLength);

var food = fruit.concat(vegetables);
console.log(food);

//["apple", "orange", "watermelon", 1, "carrot", "tomato", "pepper", 3]
var removedItem = food.splice(4, 2);
console.log(removedItem);

var reverseArray = food.reverse();
console.log(reverseArray);

var returnedJoin = food.join();
console.log("fruit: ", fruit);
console.log("vegetables: ", vegetables.length);
