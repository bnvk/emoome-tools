// body_5.js
module.exports = {
	title: 'Body Words',
	full: 'body',
	language: 'english',
	type: 'P',
	topic: 'B',
	url: 'http://www.99main.com/~charlief/Blindness.htm',
	element: '.content dt a',
	filter: [
   		''
	],
	clean: function(text) {

		text = text.replace(' - (lgn)', '');
		text = text.replace(' - (small pit)', '');
		text = text.replace(' gland - (tear duct)', '');
		text = text.replace(' - (yellow spot)', '');
		text = text.replace(' - (rpe)', '');
		text = text.replace(' - (tear duct)', '');
		text = text.replace(' - (rpe)', '');
		text = text.replace(' - (LGN)', '');
		text = text.replace(' - (Tear Duct)', '');
		text = text.replace(' - (RPE)', '');

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