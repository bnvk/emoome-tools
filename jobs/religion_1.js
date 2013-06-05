// religion_1.js
module.exports = {
	title: 'Religion Words',
	full: 'religion',
	language: 'english',
	type: 'I',
	topic: 'RE',
	url: 'http://www.religionfacts.com/a-z-religion-index/index.htm',
	element: 'div.listsub table td a',
	filter: [],
	clean: function(text) {

		text = text.replace(' (iskcon)', '');
	
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