// places_9.js
module.exports = {
	title: 'Places Words',
	full: 'places',
	language: 'english',
	type: 'D',
	topic: 'PL',
	url: 'http://en.wikipedia.org/wiki/List_of_cities_in_Australia',
	element: '#mw-content-text table ul li a',
	filter: [ 
	 '1 Australian Capital Territory',
     '2 New South Wales',
     '2.1 Cities acknowledged on the NSW Geographical Names Register',
     '2.2 Cities not acknowledged on the NSW Geographical Names Register',
	 '[4]',
	 '[5]',
     'v',
     't',
     'e'
	],
	clean: function(text) {

		text = text.replace('3 ', '');
		text = text.replace('4 ', '');
		text = text.replace('5 ', '');
		text = text.replace('6 ', '');
		text = text.replace('7 ', '');
		text = text.replace('8 ', '');
		text = text.replace('9 ', '');
		text = text.replace('10 ', '');
		text = text.replace('11 ', '');
		text = text.replace('City of ', '');

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