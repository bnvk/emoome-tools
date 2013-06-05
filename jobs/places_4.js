// places_4.js
module.exports = {
	title: 'Places Words',
	full: 'places',
	language: 'english',
	type: 'D',
	topic: 'PL',
	url: 'http://en.wikipedia.org/wiki/List_of_national_capitals_of_countries_in_Europe_by_area',
	element: 'table td:nth-child(2) a',
	filter: [
	 'cite',
     'references or sources',
     'improve this article',
     'adding citations to reliable sources',
     'removed'	
	],
	clean: function(text) {

		var output = {
			type: "string",
			data: text
		};

		return output;
	}
};