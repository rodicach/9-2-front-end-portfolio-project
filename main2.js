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

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
	event.preventDefault();
	const dropList = document.querySelector('.dropdownList');
	// console.log(dropList.value);
	let display = document.querySelector('.display');
	display.innerHTML = "";
	for (let x of authorQuotes) {
		if (dropList.value === x.author) {
			// console.log(x);
			let quote = document.createElement('p');
			// create span element and then put text into span element, put span el into p tag
			//apply background class to span, (span getting class instaed of p tag)
			quote.textContent = `${x.quote}`;
			quote.classList.add("background");
			display.append(quote);
		}
	}
});
