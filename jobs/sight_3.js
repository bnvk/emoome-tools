// sight_3.js
module.exports = {
	title: 'Sight Words',
	full: 'sight',
	language: 'english',
	type: 'S',
	topic: 'SG',
	url: 'http://www.allaboutvision.com/conditions/',
	element: '#content p span a b',
	filter: [
	 'Common Eye Disorders',
     'Eye Symptoms A to Z',
     'Eye Infections',
     'Eye Injury: A Guide to Treatment',
     'Clinical Trials Related to Eye Diseases'
	],
	clean: function(text) {

		text = text.replace('\'', '');
		text = text.replace(' (STGD)', '');
		text = text.replace(' (CXL, C3R)', '');
		text = text.replace(' (AMD)', '');
		text = text.replace(' (Pink Eye)', '');
		text = text.replace(' (Drooping Eyelid)', '');
		text = text.replace(' (Light Sensitivity)', '');
		text = text.replace(' (Eye Strokes)', '');
		text = text.replace(' (Lazy Eye)', '');
		text = text.replace(' (Diplopia)', '');
		text = text.replace(' (HOAs)', '');
		text = text.replace(' (Farsightedness)', '');
		text = text.replace(' (Nearsightedness)', '');

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