// Lab 6: Arrays and Objects
// Author: Sam Rojas
// Date: April-27-2025


// Transport Choices
myTransport = ["Car", " Bus", " Legs", " Bike", " Scooter"];


// Main Ride Object
myMainRide = {
  make: "Nissan",
  model: "Frontier",
  year: "2015",
  color: "black",
  age: function() {
    return 2025 - this.year;
    }
  }


// Output
document.writeln("What I have for transportation: ", myTransport, "</br>");

document.writeln("My Main Choice: <pre>", 
  JSON.stringify(myMainRide, null, '\t'), "</pre>");

