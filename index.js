const readLineSync = require('readline-sync')
const utilityOption = parseInt(readLineSync.question('Welcome to Unit converers. \nWhich utility function would you like to use?\n1. Kg to Pounds\n2. Foot to Meter\n'));

function kgToPounds(kg) {
  return kg*2.2046;
}
function footTometer(ft) {
  return ft*0.3048;
}

if(utilityOption===1){
    const inputKg = readLineSync.question('\nPlease enter the value in KG\n');
    console.log("Output: "+ kgToPounds(inputKg)+" pounds");
}
else if(utilityOption===2){
    const inputFoot = readLineSync.question('\nPlease enter the value in foot\n');
    console.log("Output: "+footTometer(inputFoot)+" meters");
}
else{
    console.log('Invalid Option\n');
}





