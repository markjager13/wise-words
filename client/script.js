const container = document.getElementById('container');
const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const newQuoteBtn = document.getElementById('new-quote');
const allTab = document.getElementById('tabAll');
const greekTab = document.getElementById('tabGreek');
const latinTab = document.getElementById('tabLatin');
const loader = document.getElementById('loader');

// Variable to store new quote
let apiQuote = [];

// Show loading
function loading() {
    loader.hidden = false;
    container.hidden = true;
}

// Hide loading
function complete() {
    container.hidden = false;
    loader.hidden = true;
}

// Renders new quote to page
function showNewQuote() {
    const newQuote = apiQuote;
    // to use when fetching all guotes locally
    //const randomAllQuote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    // Set quote, hide loader
    quoteText.textContent = newQuote[0].quoteOriginal;
    authorText.textContent = newQuote[0].author;
    complete();
}

// Gets a new quote on button click, checks which tab is selected
function getNewQuote() {
    if (allTab.checked) {
        getRandomQuote();
    }
    if (greekTab.checked) {
        getGreekQuote();
    }
    if (latinTab.checked) {
        getLatinQuote();
    }
}

// Gets random quote from API
async function getRandomQuote() {
    loading();
    const apiUrl = 'http://localhost:3000/quotes/random/';
    try {
        const response = await fetch(apiUrl);
        apiQuote = await response.json();
        showNewQuote();
    } catch (error) {
        // catch error here
    }
}

// Gets random ancient greek quote from API
async function getGreekQuote() {
    loading();
    const apiUrl = 'http://localhost:3000/quotes/randomgreek/';
    try {
        const response = await fetch(apiUrl);
        apiQuote = await response.json();
        showNewQuote();
    } catch (error) {
        // catch error here
    }
}

// Gets random latin quote from API
async function getLatinQuote() {
    loading();
    const apiUrl = 'http://localhost:3000/quotes/randomlatin/';
    try {
        const response = await fetch(apiUrl);
        apiQuote = await response.json();
        showNewQuote();
    } catch (error) {
        // catch error here
    }
}

// Event listeners
newQuoteBtn.addEventListener('click', getNewQuote);

// On Load
getRandomQuote();
