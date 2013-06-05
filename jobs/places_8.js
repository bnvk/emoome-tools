// places_8.js
module.exports = {
	title: 'Places Words',
	full: 'places',
	language: 'english',
	type: 'D',
	topic: 'PL',
	url: 'http://en.wikipedia.org/wiki/List_of_cities_in_South_America',
	element: 'table.wikitable tr td:nth-child(2) a',
	filter: [     
	],
	clean: function(text) {

		var output = {
			type: "string",
			data: text
		};

		return output;
	}
};