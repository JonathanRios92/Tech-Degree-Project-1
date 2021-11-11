/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

let quotes = [
  {
    quote: `No matter what you're going through, there's a light at the end of the tunnel.`,
    source: 'Demi Lovato',
    citation: 'Pinterest',
    year: '2017'
  },
  {
    quote: 'A journey of a thousand miles begins with a single step.',
    source: 'Chinese Proverb',
    citation: 'wow4u',
    year: '1875'
  },
  {
    quote: 'The way to get started is to quit talking and begin doing.',
    source: 'Walt Disney',
    year: '1950',
    tag: 'Entertainment'
  },
  {
    quote: 'The easily outraged are easily manipulated. If you can’t control your emotions, other people will',
    source: 'Gurwinder',
    citation: 'Reddit'
  },
  {
    quote: 'Age is just a number, and your talent will never fail you. It has no expiry date.',
    source: 'Madhuri Dixit',
    citation: 'BrainyQuote',
    year: '2001'
  }
  
];


/***
 * getRandomQuote` function
 * randomNumber stores the random quote generator
 * randomQuotes than stores the output of quotes and randomNumber 
***/

function getRandomQuote() {
  let randomNumber = Math.floor(Math.random() * quotes.length);
  let randomQuotes = quotes[randomNumber]
  return randomQuotes;
  };


/*** 
 * Random Color Function
 * function created to change the background color everytime
***/

function randomBgColor() {
  let red = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let bgColor = "rgb(" + red + "," + blue + "," + green + ")";

  document.body.style.background = bgColor;
  return bgColor;
  };



/***
 * `printQuote` function
 * This function stores the random background color 
 * Stores a variable string called html that target special classes in the index.html
 * adds to the string to get the final result
 * a conditional statement to see if there are objects in the array
 * if they are they get added to the html variable
***/

function printQuote() {
  let randomQuote = getRandomQuote();
  randomBgColor();

  
  let html = `
  <p class="quote">${randomQuote.quote}</p>
  <p class="source">${randomQuote.source} 
  `
  
  if ( randomQuote.citation ) {
   
    html += `<span class="citation">${randomQuote.citation}</span>`; 
  
  };

  if ( randomQuote.year ) {
  
    html += `<span class="citation">${randomQuote.year}</span>`
    
  };

  if ( randomQuote.tag ) {
    html += `<span class="citation">${randomQuote.tag}</span>
    </p>
    `
  }
 
  document.getElementById('quote-box').innerHTML = html;
};

/***
*
* Time Interval function
* This allows the background color and quote to change every ten seconds
***/
setInterval(printQuote, 10000);


/***
 * click event listener for the print quote button
 * 
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);


