//true
function every(arr, f) {
    for (let i = 0; i < arr.length; i++){
        if (!checkTrue(arr[i])){
            return false
        };
    }
    return true;
}

function checkTrue (theSingleNumber) {
    return typeof theSingleNumber === "number"
}

console.log(every([1,2,3], checkTrue))



//some
function some(arr, callBack) {
    for (let i = 0; i < arr.length; i++){
        if (callBack(arr[i])){
            return true
        };
    }
    return false;
}

function checkTrue (theSingleNumber) {
    return typeof theSingleNumber === "number"
}

console.log(some(["1","2","3"], checkTrue))
//alt
// console.log(some(["3","2","3"], theSingleNumber=>theSingleNumber === "1"))
