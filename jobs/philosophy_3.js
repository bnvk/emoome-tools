// philosophy_3.js
module.exports = {
	title: 'Philosophy Words',
	full: 'philosophy',
	language: 'english',
	type: 'I',
	topic: 'PH',
	url: 'http://catholiceducation.org/articles/religion/re0460.html',
	element: 'table p font',
	filter: [
	],
	clean: function(text) {

		text = text.replace('\n', '');
		text = text.replace(' (theology)', '');
		text = text.replace(' - ultimacy-analogous usage', '');
		text = text.replace('"', '');
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