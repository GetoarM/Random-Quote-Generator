/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

  
// Returns a random value that accepts value (number) as an argument
function randomNumber(value){
  let randomValue = Math.floor(Math.random() * value);
  return randomValue;
}

/*** 
 * `quotes` array
***/

const quotes = [
  {quote: 'I am not a great programmer, I am just a good programmer with great habits.', source: 'Kent Beck', topic: 'Programming'},
  {quote: 'Without music, life would be a mistake.', source:'Friedrich Nietzsche', citation:'Twilight of the Idols', year:1889, topic: 'Philisophy'},
  {quote: 'People understand me so poorly that they don\'t even understand my complaint about them not understanding me.', source:'Søren Kierkegaard', citation:'The Journals of Kierkegaard', topic: 'Philisophy'},
  {quote: 'Be — don\'t try to become', source:'Osho', topic: 'Spirituality'},
  {quote: '“Be yourself; everyone else is already taken.”', source:'Oscar Wilde'},
  {quote: 'Appear weak when you are strong, and strong when you are weak.', source:'Sun Tzu', citation: 'The art of war', topic: 'War'},
  {quote: '“I am so clever that sometimes I don\'t understand a single word of what I am saying.”', source: 'Oscar Wilde'},
  {quote: '“If you only read the books that everyone else is reading, you can only think what everyone else is thinking.” ', source:'Haruki Murakami', citation: 'Norwegian Wood',topic: 'Philosophy'}
];



/***
 * `getRandomQuote` function
***/

// Created a function that returns a random object inside the 'quotes' array
function getRandomQuote(){
  let randomQuote = quotes[randomNumber(quotes.length)]; // generates a random number between zero and the last index in the `quotes` array
  return randomQuote; 
}


/***
 * `printQuote` function
***/

function printQuote() {

  const randomQuote = getRandomQuote(); // assigning the 'getRandomQuote()' function to a variable

  // Creating a html variable string
  let html = `
    <p class="quote">${randomQuote.quote}</p> /
    <p class="source">${randomQuote.source}`

    // Using if statements to check if other properties exist and concatenating the html variable
    if (randomQuote.citation){
      html += `
        <span class="citation">${randomQuote.citation}</span>`    
    } 
    if (randomQuote.year){
        html += `<span class="year">${randomQuote.year}</span>`
    }

    if (randomQuote.topic){
      html += `<span class="topic"> - ${randomQuote.topic}</span>`
    }
    
    html += `</p>` // closing the html variable

    document.body.style.backgroundColor = "rgb(" + randomNumber(256) + "," + randomNumber(256) + "," + randomNumber(256) + ")"; // random background color
    document.getElementById('quote-box').innerHTML = `${html}`; // adding the html string variable to the innerHTML
  }

// Setting interval to change quotes every 15 seconds
setInterval(printQuote, 15000);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);

//alert(quotes[0].quote);
//console.log(getRandomQuote());