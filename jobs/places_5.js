// places_5.js
module.exports = {
	title: 'Places Words',
	full: 'places',
	language: 'english',
	type: 'D',
	topic: 'PL',
	url: 'http://en.wikipedia.org/wiki/List_of_cities_in_the_European_Union_with_more_than_100,000_inhabitants',
	element: 'table td:nth-child(2) a',
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