// Given 2 strings, return their concatenation, except omit the first char
// of each. The strings will be at least length 1.

//non Start
var nonStart=function(a, b) {
    a.slice(1);
    b.slice(1);
    //a.substr(1);
    //b.substr(1);
	//return a.substr(1) + b.substr(1);
  return a.slice(1) + b.slice(1);
}
nonStart("cat", "dog");

//alternative
var nonStart=function(a, b) {
    return a.substr(1) + b.substr(1)
}
nonStart("cat", "dog");
