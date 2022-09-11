const keyword = " "
const url = `https://api.quotable.io/search/quotes?query=${keyword}&fields=author`

fetch(url)
.then(res => res.json())
.then((resJson) => console.log(resJson))
.catch((err) => console.log(err));

