// writing_4.js
module.exports = {
	title: 'Writing Words',
	full: 'writing',
	language: 'english',
	type: 'I',
	topic: 'WR',
	url: 'http://en.wikipedia.org/wiki/List_of_literary_genres',
	element: '#mw-content-text ul li a',
	filter: [
	     'v',
	     't',
	     'e',
	     '1 Classifications of literature',
	     '2 Major forms of literature',
	     '3 Classic major genres',
	     '4 Genre categories: fiction and nonfiction',
	     '4.1 Common genres: fiction',
	     '4.2 Common genres: nonfiction',
	     '4.3 Literary fiction vs. genre fiction',
	     '5 Genres and subgenres',
	     '6 Nonfiction genres',
	     '6.1 References'
	],
	clean: function(text) {

		text = text.replace('\'', '');

		if (text.length > 1) {	
			var output = {
				type: "string",
				data: text
			};
		}
		else {
			var output = '';
		}

		return output;
	}
};