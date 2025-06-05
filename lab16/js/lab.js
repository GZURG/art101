// Lab 16 AJAX, APIs, and the XKCD comic - using AJAX to display a comic that's only formatted in text
// Author: Sam Rojas
// Date: 6 - 4 - 2025


// Using the core $.ajax() method
const ajaxObj = {
    url: "https://xkcd.com/info.0.json",   // The URL for the request (from the api docs)
    data: {},
    type: "GET",   // Whether this is a POST or GET request
    mode: 'cors',
    dataType : "json",   // The type of data we expect back
        }

// Calling AJAX
$.ajax(ajaxObj)

// What do we do when the api call is successful, all the action goes below
    .done(function(data) {
        console.log(data);

    // Pulling relevant data from results:
    let title = data.title;
    let date = data.num;
    let desc = data.transcript;
    let imageUrl = data.img;
  

// Data in output:
  $("#output").html(`<h2>${title}</h2>`);
  $("#output").append(`<img src = '${imageUrl}'/>`);
  $("#output").append(`<p class = 'date'>Comic: ${date}</p>`);
  $("#output").append(`<p class = 'desc'> ${desc}</p>`);

})


// What we do if the api call fails
    .fail(function (jqXHR, textStatus, errorThrown) { 
        console.log("Something went wrong, check again?", textStatus, errorThrown);
    
})



