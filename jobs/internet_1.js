// internet_1.js
module.exports = {
	title: 'Internet Words',
	full: 'internet',
	language: 'english',
	type: 'D',
	topic: 'IN',
	url: 'http://www.techterms.com/category/internet',
	element: '#cattable tr td:first-child',
	filter: [],
	clean: function(text) {

		text = text.replace('', '');
	
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