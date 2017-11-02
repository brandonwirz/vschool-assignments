
document.getElementById("button").addEventListener("click", function(){
    var numberOne = Number(document.getElementById("baddie").value);
    var numberTwo = parseInt(document.getElementById("baddie2").value);
    var numberThree = parseInt(document.getElementById("baddie3").value);

    document.getElementById("result").innerText = numberOne + numberTwo + numberThree;
});
