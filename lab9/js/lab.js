// Lab 9 - Jqueries and Libraries (Not the Book Kind)
// Author: Sam Rojas
// Date: 5 - 11 - 2025

// Challenge Section Button
$("#challenge").append("<button id='button-challenge'>Change style of Challenge section.</button>");
$("#button-challenge").click(function(){
  $("#challenge").toggleClass("special");
});

// Problem Section Button
$("#problems").append("<button id='button-problems'>Change style of Problems section.</button>");
$("#button-problems").click(function(){
  $("#problems").toggleClass("special");
});

// Results Section Button
$("#results").append("<button id='button-results'>Change style of Results section.</button>");
$("#button-results").click(function(){
  $("#results").toggleClass("special");
});



