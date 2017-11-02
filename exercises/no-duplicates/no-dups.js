//
// var input = 'mississippi';
//
// var removed = 'misipi';
// var newInput = 'ssspp'
//Misisipi
//console.log()

function noDups(){
  var input ='mississippi'
  var result = '';
  for (var i =0; i < input.length; i++){
    if (result.indexOf(input[i]) < 0){
      result += input[i];
    }
  }
  return result;
}
console.log(
  noDups('mississippi')
);
