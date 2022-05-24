const container = document.getElementById('container');
const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote-text');
const quoteOriginal = document.getElementById('quote-original');
const quoteEnglish = document.getElementById('quote-english');
const author = document.getElementById('author');
const newQuoteBtn = document.getElementById('new-quote');
const translateBtn = document.getElementById('translate-button');
const allTab = document.getElementById('tabAll');
const greekTab = document.getElementById('tabGreek');
const latinTab = document.getElementById('tabLatin');
const oldEngTab = document.getElementById('tabOldEng');
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
    // check quote length
    if (newQuote[0].quoteOriginal.length > 120 || newQuote[0].quoteEnglish.length > 120) {
        quoteText.classList.add('long-quote');
    } else {
        quoteText.classList.remove('long-quote');
    }
    quoteOriginal.textContent = newQuote[0].quoteOriginal;
    quoteEnglish.textContent = newQuote[0].quoteEnglish;
    author.textContent = newQuote[0].author;
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
    if (oldEngTab.checked) {
        getOldEngQuote();
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

// Gets random old english quote from API
async function getOldEngQuote() {
    loading();
    const apiUrl = 'http://localhost:3000/quotes/randomoldeng/';
    try {
        const response = await fetch(apiUrl);
        apiQuote = await response.json();
        showNewQuote();
    } catch (error) {
        // catch error here
    }
}

function translateQuote() {
    if(quoteOriginal.style.display == 'block') {                
        quoteEnglish.style.display = 'block';             
        quoteOriginal.style.display = 'none';
        console.log('huh');
     }
     else {
        quoteEnglish.style.display = 'none';
        quoteOriginal.style.display = 'block';            
        console.log('wtf');
     }  
}

// Event listeners
newQuoteBtn.addEventListener('click', getNewQuote);
translateBtn.addEventListener('click', translateQuote);

// On Load
getRandomQuote();
