function findFunction(searchTerm, phrases){
  return phrases.filter(function(phrase){
      //return phrase.indexOf(searchTerm) > 0);
      return phrase.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1;
        //redundent code true/false
        // if(phrase.indexOf(searchTerm) > 0){
        //   return true
        // } else {
        //   return true
        // }
  })
};


module.exports = findFunction;
