
const matching = str => {
    const codeArr = str.replace('/\W/g', ' ').toLowerCase().split(' ').sort();
    console.log(codeArr);
    const double = codeArr.filter((item,index) => codeArr[index] === codeArr[index + 1]);
    return double.filter((item,index) => double[index] !== double[index + 1])
}



// matching("Banh mi pull skateboard ipsum lorem, kombucha scenester banjo. Franzen mlkshk consequat, PBR&B lever lever listicle irony pop-up sriracha on the saliva. Shabby on chic eu iceland far next level far lever pull drinking the right vinegar fanny pack pull minim right chicharrones migas.")
module.exports = matching;
