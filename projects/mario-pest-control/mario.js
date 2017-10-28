function add(num1, num2, num3){
    return num1 + num2 + num3
}

add(5, 7, 11);


document.getElementById("add-number").addEventListener("click", function(){
    var numberOne = Number(document.getElementById("number-one").value);
    var numberTwo = parseInt(document.getElementById("number-two").value);
    var numberThree = parseInt(document.getElementById("number-three").value);

    document.getElementById("add-result").innerText = numberOne + numberTwo + numberThree
})
