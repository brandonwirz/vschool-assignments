var seconds = 10;

var interval = setInterval(function(){
  document.getElementById("timer").innerText = --seconds;

  if (seconds <= 0) {
    var myImg = document.getElementById('myImg');
     myImg.style = "display: block";
     document.getElementById('blank').innerText = "The end of the world has come upon us!";
     clearInterval(interval);
     document.getElementById('timer').style.display = 'none';
  }
}, 1000);
