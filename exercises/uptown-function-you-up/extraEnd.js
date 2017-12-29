// Given a string, return a new string made of 3 copies of the last 2 chars
// of the original string. The string length will be at least 2.

var extraEnd=function(str) {
		let newString = str.slice(1,3)
        console.log(newString)
        let outPutString = newString.repeat(3)
        return outPutString
}
extraEnd(word);
