var lyrics = ["This", "hit", "that", "ice", "cold",
              "Michelle", "Pfeiffer", "that", "white",
              "gold", "This", "one", "for", "them",
              "hood", "girls", "Them", "good", "girls",
              "straight", "masterpieces", "Stylin'",
              "whilen'", "livin'", "it", "up", "in",
              "the", "city", "Got", "Chucks", "on",
              "with", "Saint", "Laurent", "Gotta", "kiss",
              "myself", "I'm", "so", "pretty"];

// function printArray(){
//   //mylyrics.join(', ');
//   console.log(lyrics.join(" "));
//
// }
// printArray(lyrics);


// function songBackwards(){
//   console.log(lyrics.reverse().join(" "));
// }
// songBackwards();



// function everyOtherWord(){
//     for (var i = 0; i <= lyrics.length; i += 2){
//       console.log(lyrics[i]);
//     }
// }
//
// everyOtherWord();



function reverseTwoWords(){
  var reversedArray = [];
  for (var i = 1; i < lyrics.length; i+= 2){
      reversedArray.push(lyrics[i] + " " + lyrics[i - 1]);

   }
  console.log(reversedArray.join(" "));
  }
reverseTwoWords();
