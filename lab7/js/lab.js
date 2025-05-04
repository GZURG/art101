// Lab 7 - Working with the the function bunch and how they function haha.
// Author: Sam Rojas
// Date: May 5 2025


// User Name Function
function mySort() {
  let userName = window.prompt("Put your pretty little name in: ");
  var nameArray = userName.split('');
  var nameArraySort = nameArray.sort();
  var nameArraySorted = nameArraySort.join();
  

// Decided to seperate the console log into it's own column.
  console.log("userName = ", userName);
  console.log("nameArray = ", nameArray);
  console.log("nameArraySort = ", nameArraySort);
  console.log("nameArraySorted = ", nameArraySorted);
  return nameArraySorted;
}


// Output
document.writeln("Is this the name you're looking for?  ", mySort(), "</br>");
