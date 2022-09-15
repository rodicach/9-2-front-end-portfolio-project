const quotes = document.querySelector('#quote');
const btn = document.getElementById('btn');
const quote = document.getElementById('quote')
const author = document.getElementById('author')

const quoteUrl = `https://api.quotesnewtab.com/v1/quotes`

btn.addEventListener('click', (event) => {
    fetchQuote()  //for the click on the button
});
fetchQuote()   //for it to happen when page loads

function fetchQuote() {
    fetch(quoteUrl)
    .then(res => res.json())
    .then((data) => {
        console.log(data);
        const randomQuoteIndex = Math.round(Math.random() * data.length);
        quote.innerText = data[randomQuoteIndex].quote;
        author.innerText = data[randomQuoteIndex].author;
    })
    .catch((err) => console.log(err));
    console.log("An error has occurred. Please try again.")

}

