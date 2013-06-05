// places_7.js
module.exports = {
	title: 'Places Words',
	full: 'places',
	language: 'english',
	type: 'D',
	topic: 'PL',
	url: 'http://experiment/cities.html',
	element: 'table tr td:first-child',
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