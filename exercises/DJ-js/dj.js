
function mouseOver() {
    var x = document.getElementById("square");
    x.style.backgroundColor = document.getElementById("square");
    x.style.backgroundColor = 'blue';
}
document.getElementById("square").addEventListener("onmouseover", mouseOver);

document.getElementById("square").addEventListener("onkeydown", keyDownBlue);
document.getElementById("square").addEventListener("onkeydown", keyDownRed);

function keyDown(e) {
  var x = event.keyCode;
  if (x == 66) {
        var y = document.getElementById("square");
        y.style.backgroundColor = document.getElementById("square");
        y.style.backgroundColor = 'blue';

  } else if (x == 82) {
        var y = document.getElementById("square");
        y.style.backgroundColor = document.getElementById("square");
        y.style.backgroundColor = 'red';
  } else if (x == 89) {
        var y = document.getElementById("square");
        y.style.backgroundColor = document.getElementById("square");
        y.style.backgroundColor = 'yellow';
  }
  else if (x == 71) {
        var y = document.getElementById("square");
        y.style.backgroundColor = document.getElementById("square");
        y.style.backgroundColor = 'green';
  } else {
        var y = document.getElementById("square");
        y.style.backgroundColor = document.getElementById("square");
        y.style.backgroundColor = 'orange';
    }
}
// switch(x)
//   case '66':  {
//       var y = document.getElementById("square");
//       y.style.backgroundColor = document.getElementById("square");
//       y.style.backgroundColor = 'blue';
//   break;
//  case(82)
//       var y = document.getElementById("square");
//       y.style.backgroundColor = document.getElementById("square");
//       y.style.backgroundColor = 'red';
//   break;
//  case '89':
//       var y = document.getElementById("square");
//       y.style.backgroundColor = document.getElementById("square");
//       y.style.backgroundColor = 'yellow';
// }
// else if (x == 71) {
//       var y = document.getElementById("square");
//       y.style.backgroundColor = document.getElementById("square");
//       y.style.backgroundColor = 'green';
// } else {
//       var y = document.getElementById("square");
//       y.style.backgroundColor = document.getElementById("square");
//       y.style.backgroundColor = 'orange';
//   }
// }



// if (body.style.backgroundColor === 'red'){
//       body.style.backgroundColor = 'orange';
// }else if(body.style.backgroundColor === 'orange'){
//       body.style.backgroundColor = 'yellow';
// }else if(body.style.backgroundColor === 'yellow'){
//        body.style.backgroundColor = 'green';
// }else if(body.style.backgroundColor === 'green'){
//        body.style.backgroundColor = 'blue';
// }else if(body.style.backgroundColor === 'blue'){
//        body.style.backgroundColor = 'indigo';
// }else if(body.style.backgroundColor === 'indigo'){
//        body.style.backgroundColor = 'violet';
// }else if(body.style.backgroundColor === 'violet'){
//        body.style.backgroundColor = 'white';
// }else{
//      body.style.backgroundColor = 'red';
// }
// var body = document.querySelector("body");
//
// switch(body.style.backgroundColor){
//     case 'red':
//         body.style.backgroundColor = 'orange';
//         break;
//     case 'orange':
//         body.style.backgroundColor = 'yellow';
//         break;
//     case 'yellow':
//         body.style.backgroundColor = 'green';
//         break;
//     case 'green':
//         body.style.backgroundColor = 'blue';
//         break;
//     case 'blue':
//         body.style.backgroundColor = 'indigo';
//         break;
//     case 'indigo':
//         body.style.backgroundColor = 'violet';
//         break;
//     case 'violet':
//         body.style.backgroundColor = 'white';
//         break;
//     default:
//         body.style.backgroundColor = 'red';
//       }


// function mouseOut() {
//     var x = document.getElementById("square");
//     x.style.backgroundColor = document.getElementById("square");
//     x.style.backgroundColor = '';
// }
// document.getElementById("square").addEventListener("onmouseout", mouseOut);


function mouseDown() {
    var x = document.getElementById("square");
    x.style.backgroundColor = document.getElementById("square");
    x.style.backgroundColor = 'red';
}
document.getElementById("square").addEventListener("onmousedown", mouseDown);


// function keyDownRed(e) {
//   var x = event.keyCode;
//   if (x == 82) {
//         var y = document.getElementById("square");
//         y.style.backgroundColor = document.getElementById("square");
//         y.style.backgroundColor = 'red';
//           e.stopPropagation();
//   }
// }
// document.getElementById("square").addEventListener("onkeydown", keyDownRed);
//



function mouseUp() {
    var x = document.getElementById("square");
    x.style.backgroundColor = document.getElementById("square");
    x.style.backgroundColor = 'yellow';
}
document.getElementById("square").addEventListener("onmouseup", mouseUp);


function dblCLick() {
    var x = document.getElementById("square");
    x.style.backgroundColor = document.getElementById("square");
    x.style.backgroundColor = 'green';
}
document.getElementById("square").addEventListener("onmouseup", dblCLick);

function onScroll(e) {
       var body = document.querySelector("body");
        body.style.backgroundColor = 'orange';
        e.stopPropagation();
}
document.querySelector("body").addEventListener("onwheel", onScroll);


//var body = document.querySelector("body");


//window.MouseWheelEvent
