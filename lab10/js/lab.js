// Lab 10 - Working for the JavaScript Webpage
// Author: Sam Rojas
// Date: May 14 2025

// Random Conversation Dialogue
function generateConversation() {
  const text = "Did you know that your soda will taste different depending on the container? Take Coke for example, did you ever notice how there is a difference in taste based on where your Coke is contained? Perhaps you may find glass bottle Coke better than aluminum can Coke, or fountain Coke better than plastic bottle Coke. But I don't know the exact reasons for why this is, it's still an interesting thing to note when drinking soda.";
  const min = 1;
  const max = 500;
  const randLen = Math.floor(Math.random() * (max - min + 10)) + min;
  
  // Get a random starting index to slice the conversation text.
  const randStart = Math.floor(Math.random() * (text.length - randLen + 10));

  // Generate the random conversation text.
  return text.slice(randStart, randStart + randLen);
}


// Click listern for the button.
$("#lets-talk").click(function(){
  const newText = generateConversation();
 $("#output").append('<div class="text"><p>' + newText + '</p></div>');
});


// Recieve new random conversation.
// const newText = generateConversation();


// Appends a new div to our output div.
// $("#output").append('<div class="text"><p>' + newText + '</p></div>');

