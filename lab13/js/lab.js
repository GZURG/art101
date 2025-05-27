// Lab 13: Loopies, Fizz, Buzz, and 5 Big Booms
// Author: Sam Rojas
// Date: 5 - 25 - 2025

// FizzBuzzBoom (but Chex Mix snacks)
function bagChexMix(){
    let output = "";

for (let chips = 1; chips <= 200; chips++){
  let result = "";
  
  if (chips % 3 === 0 && chips % 5 === 0) {
    result = "Goldfish!";
  }

  else if(chips % 5 === 0) {
    result = "Pretzel!";
  }

  else if(chips % 7 === 0) {
    result = "M&M!";
  }

  else if(chips % 3 === 0) {
    result = "Bagel Chip!";
  }

  else {
    result = chips;
    }

    output += chips + ": " + result + "<br>";
  }
  return output;
}

// Outputting into the Web Page
$("#output").html(bagChexMix());
