

var dictionary ={
  // conceited:  "is vain",
  // inept: "no skill",
  // courage: "strength",
  // angry: "strong feeling of annoyance",
}

var newWord = function(word, definition){
  // if(dictionary[word] === indefined){
  //     dictionary[word] = definition;
  // }else{
  //   console.log("thart is already a word")
  // }
  dictionary[word] = definition;
  // console.log(dictionary);
  // console.log(dictionary[word]);
}


//passed in as a string word parameter
var search = function(word){
  // return dictionary[word];
  if(dictionary[word] === undefined){
    return null
  }else{
    return dictionary[word];
  }
}

// newWord("cat", "a selfish animal");
// newWord("cat", "a regular old animal");//test node app.js
// newWord("dog", "furry beast");
module.exports = {
  newWord,
  search
}
