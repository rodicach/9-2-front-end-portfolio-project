const form = document.getElementById("form");
dropdown.length = 0;

let defaultOption = document.createElement('option');
defaultOption.text = 'Choose Author';

form.add(defaultOption);
form.selectedIndex = 0;




form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const url = "https://api.quotesnewtab.com/v1/quotes";

    fetch(url)
    .then((response) => response.json())
    .then((authorQuotes) => {
        console.log(authorQuotes)  //enter function here
    })
    .catch((error) => {
        console.log(error)
    })
})
// Combine duplicate authors as one
// display all quotes from same author on the page
function getAuthors(authorInfo) {
    const author = 
}

// Filter out the authors as 1 author
// function onlyUnique(value, index, self) {
//   return self.indexOf(value) === index;
// }

// usage example:
// var a = ['a', 1, 'a', 2, '1'];
// var unique = a.filter(onlyUnique);

// console.log(unique); // ['a', 1, 2, '1']

// take author, put each key in element looping through forEach as well

