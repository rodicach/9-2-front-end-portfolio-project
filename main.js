
const quoteUrl = `https://api.quotesnewtab.com/v1/quotes`

fetch(quoteUrl)
.then(res => res.json())
.then((resJson) => console.log(resJson))
.catch((err) => console.log(err));

