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
    citation: '',
    year: '1950'
  },
  {
    quote: 'The easily outraged are easily manipulated. If you can’t control your emotions, other people will',
    source: 'Gurwinder',
    citation: 'Reddit',
    year: ''
  },
  {
    quote: 'Age is just a number, and your talent will never fail you. It has no expiry date.',
    source: 'Madhuri Dixit',
    citation: 'BrainyQuote',
    year: '2001'
  }
  
];


/***
 * `getRandomQuote` function
***/

function getRandomQuote() {
  let randomNumber = quotes[Math.floor(Math.random() * quotes.length)];
  return randomNumber;
  };

/*** 
 * 
 * Random Color Function
 * 
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
***/

function printQuote() {
  let randomQuote = getRandomQuote();
  randomBgColor();

  
  let html = `
  <p class="quote">${randomQuote.quote}</p>
  <p class="source">${randomQuote.source} 
  `
  
  if ( randomQuote.citation === '' ) {
   
    quotes.splice(2, 1);
  
  } else {
  
    html += `<span class="citation">${randomQuote.citation}</span>`; 
  
  };

  if ( randomQuote.year === '' ) {
  
    quotes.splice(3, 1);
  
  } else {
  
    html += `<span class="citation">${randomQuote.year}</span>
    </p>
    `
  } 
 
  document.getElementById('quote-box').innerHTML = html;
};

/***
*
* Time Interval function
*
***/
setInterval(printQuote, 10000);


/***
 * click event listener for the print quote button
 * 
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);


