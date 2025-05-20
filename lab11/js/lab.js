// Lab 11 - The JavaScript got functions to go to as well as permissions slips (forms).
// Author: Sam Rojas
// Date: 5 - 18 - 2025
// BE SURE TO HAVE THE LATEST VERSION OF JQUERY.



// Sorts the characters of a string in alphabetical order.
function sortString(inputString) {
  return inputString.split('').sort().join('');
}


// Button Listener
$("#submit").click(function(){
  const userName = $("#user-name").val();  // --> Recives the input's value field.
  userNameSorted = sortString(userName);   // --> Modifies and sorts the user name.
  $("#output").html('<div class="text"><p>' + userNameSorted + '</p></div>');   // --> Selects the output div and appends the new modded div.
    document.getElementById("displayText").textContent = "I hope you like this new name. It really shows off your eyes.";   // --> Displays flavor text upon button click.

});


