// Array of quotes
const quotes = [
  "The best way to predict the future is to create it.",
  "Do one thing every day that scares you.",
  "Success is not how high you have climbed, but how you make a positive difference to the world.",
  "Strive not to be a success, but rather to be of value.",
  "Don't watch the clock; do what it does. Keep going.",
  "The only way to do great work is to love what you do.",
  "Success is not in what you have, but who you are.",
  "Your time is limited, don't waste it living someone else's life."
];

// Function to generate a new random quote
function generateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").textContent = quotes[randomIndex];
}

// Add event listener to the button
document.getElementById("new-quote").addEventListener("click", generateQuote);
