// health_3.js
module.exports = {
	title: 'Health Words',
	full: 'health',
	language: 'english',
	type: 'I',
	topic: 'HE',
	url: 'http://www.thirdage.com/hc/p/brain-and-nerves-group-medical-procedures',
	element: '#content ul.List_Normal li a',
	filter: [
     'Morton\'s neuroma removal',	
     'Head-up tilt table test (HUT)',
     'Imaging, magnetic resonance',
     'Intrathecal pain pump insertion',	
     'Stereotactic radiosurgery',
     'Tilt table test',
     'Transplant, bone marrow',
     'Upright tilt test',
     'Ventriculoperitoneal shunt - child',
     'Labor Unions Concerned About Affordable Health Care Act',
     'Flu Epidemic Hardest on Those 65 and Younger',
     'Are You Eating Too Much Fiber?',
     'HRT: New Guidelines 2013',
     'Purple Tomatoes: Healthier, Tastier',
     'Report: Nation\'s Kids Need to Get More Physical'	
	],
	clean: function(text) {

		//text = replace('\'', '');

		var output = {
			type: "string",
			data: text
		};

		return output;
	}
};