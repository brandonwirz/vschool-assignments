// We'll say that a number is 'teen' if it is in the range 13..19 inclusive.
//  Given 2 int values, return true if one or the other is teen, but not both

var loneTeen=function(a, b) {
	return ((a > 12 && a < 20) ^ (b > 12 && b < 20));
}
return true
