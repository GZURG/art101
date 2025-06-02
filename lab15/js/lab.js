// Lab 15 AJAX to Clean and AJAX to Code - Using AJAX and obtaining APIs to share.
// Author: Sam Rojas
// Date: 5 / 31 / 2025


// Button click response
$("#dragon").click(function() {
  console.log("Clicked.");


// Using the core $.ajax() method
$.ajax({
    url: "https://dragonball-api.com/api/characters/1",   // The API URL for the request.
    data: {    // The Data that will be sent and converted to a query string.
      id: 1,
      api_key: "super",
  },
    type: "GET",   // Specify for a POST or GET request.
    dataType : "json",   // The expected type of data.


    // When the api call is successful
    success: function(data) {
      console.log("I summon forth.");
      console.log(data);

    let chara = data.name
    let imageURL = data.image
    let desc = data.description;

    let imageHTML = `<img src = '${imageURL}'>`;

    $("#output").html("<h1>" + chara);
    $("#output").html("<p>" + desc);
    $("#output").append(imageHTML);


  },

    // If the api call fails
    error: function (jqXHR, textStatus, errorThrown) { 
      console.log("Error:", textStatus, errorThrown);
  }

})

})


