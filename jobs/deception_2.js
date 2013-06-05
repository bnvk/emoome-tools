// deception_2.js
module.exports = {
	title: 'Deception Words',
	full: 'deception',
	language: 'english',
	type: 'U',
	topic: 'DE',
	url: 'http://thesaurus.com/browse/lie',
	element: '#rpane div.sep_topreslt table.the_content a.theColor',
	filter: [],
	clean: function(text) {

		//text = text.replace('', '');
	
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