// Lab 12 - Conditionally sorting names into groups.
// Author: Sam Rojas
// Date: 5 - 21 - 2025


// Sorting Function
//function sortName(str){
  //const length = str.length;  // Counts the characters in the string.
  //const mod = length % 4; // Calculates the remainder when divided by 4.
  //return mod; // Returns remainder (0 - 3).


// Divides the name in the text input box by 4 and gives the corresponding faction.
function assignFaction(str){
  const len = str.length;
  const mod = len % 4;
 
  if (mod == 0) {
    return "Cunning Hares";

  } else if (mod == 1) {
    return  "Obol Squad";

  } else if (mod == 2) {
    return "Victoria Housekeeping";

  } else if (mod == 3) {
    return "Hollow Spec-Ops Section 6";
  }

}



// Button Listener
$("#findie").click(function(){
  let name = $("#placement").val()
  console.log(name);

  let nameLength = name.length;
  console.log(nameLength);

  let faction = assignFaction(name);
  console.log(faction);

  $("#output").html("<h1>" + "You're part of " + faction + "!" + "</h1>");

});
