// Lab 8 - #AnonFunc & Calling Back to Func
// Author: Sam Rojas
// Date: 5 - 7 - 2025

// Array
array = [2, 17, 72, 999, 1069];


// Math Function 1
function quickMaths(numb) {
  return numb * 3 + 1;
}


// Anonymous Function
var anon = array.map(function(x){
  return x + 8 * 7;
})


// Array Map 1
var Key = array.map(quickMaths);


// Console Log Outputs
console.log("My Selected Numbers: ", array);
console.log("5 will be multiplied by 3 then add 1. ", quickMaths(5));
console.log("I want to PEMDAS on the selected numbers: ", Key);
console.log("Let's be anonymous with the array:", anon);
