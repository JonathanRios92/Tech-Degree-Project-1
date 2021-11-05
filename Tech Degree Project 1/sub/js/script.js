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
    quote: '',
    source: '',
    citation: '',
    year: ''
  },
  {
    quote: '',
    source: '',
    citation: '',
    year: ''
  },
  {
    quote: '',
    source: '',
    citation: '',
    year: ''
  },
  {
    quote: '',
    source: '',
    citation: '',
    year: ''
  }

];

console.log(quotes);


/***
 * `getRandomQuote` function
***/



/***
 * `printQuote` function
***/



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);