// transportation_6.js
module.exports = {
	title: 'Transportation Words',
	full: 'transportation',
	language: 'english',
	type: 'D',
	topic: 'TR',
	url: 'http://www.macmillandictionary.com/thesaurus-category/american/Air-travel-and-relating-to-air-travel',
	element: 'div.entry a h3',
	filter: [],
	clean: function(text) {

		var output = {
			type: 'string',
			data: text
		};

		return output;
	}
};