// Given two strings, a and b, return the result of putting them together in the
// order abba, e.g. 'Hi' and 'Bye' returns 'HiByeByeHi'.

var makeAbba=function(a, b) {
    var str1= a.replace(/\s/g,"");
    var str2= b.replace(/\s/g,"");
    return (str1 + str2) + (str2 + str1);
    // return (a + b) + (b + a)
}
makeAbba("H ey", "B ye");
// makeAbba("Hi", "Bye");

module.exports = makeAbba;
