//
var ipAddress = function(str){
  // return a valid ip address number
//   if(str === [^0-255] || )
// }

// isIP4("172.16.254.1",)

module.exports = ipAddress;




// var isIpAdress = function(str) {
//
// var arrOfNum = str.split('.');
// if (arrOfNum[0] >= 0 && arrOfNum[0] <= 255 &&
//     arrOfNum[1] >= 0 && arrOfNum[1] <= 255 &&
//     arrOfNum[2] >= 0 && arrOfNum[2] <= 255 &&
//     arrOfNum[3] >= 0 && arrOfNum[3] <= 255) {
//       return true;
//     } else {
//       return false;
//     }
// }
//




function isIPv4(str) {
  var sections = str.split(".");
  if (sections.length === 4) {
    return sections.every(function(sections) {
      return parseInt(sections) >= 0 && parseInt(sections) <= 255;
    });
  };
}

module.exports = isIPv4;

//If you want something more readable than regex for ipv4 in modern browsers you can go with
//
// function checkIsIPV4(entry) {
//   var blocks = entry.split(".");
//   if(blocks.length === 4) {
//     return blocks.every(function(block) {
//       return parseInt(block,10) >=0 && parseInt(block,10) <= 255;
//     });
//   }
//   return false;
}
