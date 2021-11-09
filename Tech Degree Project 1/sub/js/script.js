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
 * `printQuote` function
***/

function printQuote() {
  let randomQuote = getRandomQuote();
  
  let html = `
  <p class="quote">${randomQuote.quote}</p>
  <p class="source">${randomQuote.source} 
  `
  
  if ( randomQuote.citation == '' ) {
    
  } else {
    html += `<span class="citation">${randomQuote.citation}</span>`;
  };

    if ( randomQuote.year == '' ) {
    
  } else {
    html += `<span class="citation">${randomQuote.year}</span>
    </p>
    `
  }
  

  return html;

  
};



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

/**** document.getElementById('quote-box').innerHTML = printQuote();
document.getElementById('load-quote').addEventListener("click", printQuote, false);
*****/

document.getElementById('load-quote').addEventListener("click", function() {
  getRandomQuote();
  document.getElementById('quote-box').innerHTML = randomQuote;
});