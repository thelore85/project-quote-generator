// cache and variable
let apiQuotes = [];

const card = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const quoteAuthor = document.getElementById('author');
const buttonQuote = document.getElementById('new-quote');
const buttonTwitter = document.getElementById('social-button');
const loader = document.getElementById('loader');



////////////////////////////////
// // API START - get quotes

async function getApiQuotes(){
    loadStart();
    const apiUrl = 'https://type.fit/api/quotes';
    try{
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();

    }catch (error){
        // catch error
    }
}


//////////////////////////
// SHOW NEW QUOTE
function newQuote(){
    loadComplete();
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    
    //insert content to HTML
    if(quote.author === null){ quoteAuthor.textContent = 'Unknown';}
    else{quoteAuthor.textContent = quote.author;};
    
    
    //resize long quote
    if(quote.text.length > 100){quoteText.classList.add('long-quote')}
    else{quoteText.classList.remove('long-quote')}
    
    // set the code and hide the loader
    quoteText.textContent = quote.text;
    loadComplete();
};


//show loader
function loadStart(){
    loader.hidden = false;
    card.hidden = true;
}

function loadComplete(){
    card.hidden = false;
    loader.hidden = true;
}


// //tweet Quote
// function tweetQuote(){
//     const twitterUrl = `https://www.tweitter.com/intent/tweet?text=${quoteText.textContent} - ${quoteAuthor.textContent}`
//     window.open(twitterUrl, '_blanck');
// }


//event listeners
buttonQuote.addEventListener('click', newQuote);
// buttonTwitter.addEventListener('click', tweetQuote);



// on load
getApiQuotes();
