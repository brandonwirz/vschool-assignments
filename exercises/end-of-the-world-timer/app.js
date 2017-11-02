// var seconds = 10;
// var seconds = 10;
//
// var interval = setInterval(function(){
//   document.getElementById("timer").innerText = --seconds;
//
//   if (seconds === 0) {
//     var myImg = document.getElementById('myImg');
//      myImg.style = "display: block";
//      document.getElementById('blank').innerText = "The end of the world has come upon us!";
//      clearInterval(interval);
//      document.getElementById('timer').style.display = 'none';
//   }
// }, 1000);
//

var countTime = 20;
	function timer() {
		var hours = parseInt( countTime / 3600 ) % 24;
		var minutes = parseInt( countTime / 60 ) % 60;
		var seconds = countTime % 60;
		var result = (hours < 10 ? "0" + hours : hours) + ":" + (minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds  < 10 ? "0" + seconds : seconds);
		document.getElementById("timer").innerText = result;
   		if(countTime == 0 ){ countTime = 20*20*20;
             var myImg = document.getElementById('myImg');
             myImg.style = "display: block";
             document.getElementById('blank').innerText = "The end of the world has come upon us!";
             document.getElementById('timer').style.display = 'none';

       }
   		countTime = countTime - 1;
   		setTimeout(function(){ timer() }, 1000);
      setTimeout


	}
	timer();
