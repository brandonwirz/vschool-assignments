function twoNumbers(param1, param2){
  //console.log(param1 * param2)
  return param1 * param2;
}
var param1 = 5;
var param2 = 9;

twoNumbers(param1, param2);


var largestNum = function(num1, num2, num3) {
  return Math.max(3,5,7);
}
console.log(largestNum());


var val = 48;
function evenOrOdd(val){//parameter
  if (val % 2 === 0){
    return "even";
  }else{
    return "odd";
  }
}
evenOrOdd(48);//argument


 function twentyChars(string){
   //string = ;
   if (string.length <= 20){
     return string + " " + string;
   }else{
        //return string.substr(0, 4);
        return string.slice(0,4);
     }
 }

twentyChars("excited");
