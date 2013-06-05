// places_6.js
module.exports = {
	title: 'Places Words',
	full: 'places',
	language: 'english',
	type: 'D',
	topic: 'PL',
	url: 'http://en.wikipedia.org/wiki/List_of_Asian_countries_by_GDP',
	element: '#mw-content-text table.wikitable td:first-child a',
	filter: [
	 'cite',
     'references or sources',
     'improve this article',
     'adding citations to reliable sources',
     'removed',
	 'original research',
     'improve it',
     'verifying',
     'inline citations',     
	],
	clean: function(text) {

		var output = {
			type: "string",
			data: text
		};

		return output;
	}
};