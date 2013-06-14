// medicine_7.js
module.exports = {
	title: 'Medicine Words',
	full: 'medicine',
	language: 'english',
	type: 'U',
	topic: 'MD',
	url: 'http://www.thirdage.com/hc/p/bones-and-joints-group-medical-procedures',
	element: '#content ul.List_Normal li a',
	filter: [
		'U.S. Surgeon General Stepping Down ',
		'Pa. Girl Gets Lung Transplant',
		'HIV Drug Can Also Protect Intravenous Drug Users',
		'OA Symptoms Could Be Controlled',
		'Support Groups Aren\'t Always Helpful',
		'Hands-Free Texting Still Distracting for Drivers',
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
		text = text.replace(', below-the-knee', '');
		text = text.replace('Minimally invasive total ', '');
		text = text.replace(' - closed manipulation', '');
		text = text.replace(' - closed', '');
		text = text.replace(' examination', '');
		text = text.replace('Bone marrow ', '');
		text = text.replace(' fluid analysis', '');
		text = text.replace(' fluid tap', '');

		var output = {
			type: "string",
			data: text
		};

		return output;
	}
};