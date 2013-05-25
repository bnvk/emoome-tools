// health_3.js
module.exports = {
	title: 'Health Words',
	full: 'health',
	language: 'english',
	type: 'I',
	topic: 'HE',
	url: 'http://www.thirdage.com/hc/p/bones-and-joints-group-medical-procedures',
	element: '#content ul.List_Normal li a',
	filter: [
    	 'Adhesive capsulitis - arthroscopic surgery',
	     'Adhesive capsulitis - closed manipulation',	
    	 'Myelography for detecting a herniated disk',
		 'Open reduction and internal fixation surgery',
		 'Labor Unions Concerned About Affordable Health Care Act',
	     'Flu Epidemic Hardest on Those 65 and Younger',
	     'Are You Eating Too Much Fiber?',
	     'HRT: New Guidelines 2013',
	     'Purple Tomatoes: Healthier, Tastier',
	     'Report: Nation\'s Kids Need to Get More Physical',
	     'Setting a fracture - closed',
	     'Setting of fracture',
	     'Spinal injection of corticosteroids',
	     'Computed axial tomography',
	     'Computed tomography scan',
	     'Diskography for detecting a herniated disk',
	     'Dual energy x-ray absorptiometry',
	     'Arthrodesis of foot and ankle',
	     'Arthrodesis of the foot and ankle - laparoscopic'	     
	],
	clean: function(text) {

		text = text.replace('\'', '');
		text = text.replace(', foot', '');
		text = text.replace(', toe', '');
		text = text.replace(', hip', '');
		text = text.replace('bone marrow ', '');
		text = text.replace(', above the knee', '');
		text = text.replace(', below-the-knee', '')

		var output = {
			type: "string",
			data: text
		};

		return output;
	}
};