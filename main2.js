// const form = document.getElementById("form");
// dropdown.length = 0;

// let defaultOption = document.createElement('option');
// defaultOption.text = 'Choose Author';

// form.add(defaultOption);
// form.selectedIndex = 0;

const authorNameObject = {};
let authorQuotes = {};
const url = 'https://api.quotesnewtab.com/v1/quotes';

fetch(url)
	.then((response) => response.json())
	.then((aQ) => {
		authorQuotes = aQ;
		for (let author of authorQuotes) {
			authorNameObject[author.author] =
				authorNameObject[author.author] + 1 || 1;
		}
		console.log(authorNameObject);
		for (let author in authorNameObject) {
			const dropList = document.querySelector('.dropdownList');
			const authorList = document.createElement('option');

			authorList.setAttribute('value', author);
			authorList.innerText = author;
			dropList.append(authorList);
		}
	})
	.catch((error) => {
		console.log(error);
	});

// on submit, grab name of author (event.target.select_option.value)
// Use name of author to key into  authorNameObject and get back an array of quotes
//from each quote create DOM elements and append to html
const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
	event.preventDefault();
	const dropList = document.querySelector('.dropdownList');
	// console.log(dropList.value);
	let display = document.querySelector('.display');
	for (let x of authorQuotes) {
		if (dropList.value === x.author) {
			// console.log(x);
			let quote = document.createElement('p');
			quote.textContent = `${x.quote}`;
			display.append(quote);
		}
	}
});
