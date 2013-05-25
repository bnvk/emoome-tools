// art_1.js
module.exports = {
	title: 'Drugs Words',
	full: 'drugs',
	language: 'english',
	type: 'D',
	topic: 'D',
	url: 'http://www.drugs.com/drug_information.html',
	element: '.boxListTopDrugs ul li a',
	filter: [],
	clean: function(text) {
	
		var output = {
			type: "string",
			data: text
		};

		return output;
	}
};