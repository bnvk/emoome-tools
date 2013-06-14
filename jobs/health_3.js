// health_3.js
module.exports = {
	title: 'Health Words',
	full: 'health',
	language: 'english',
	type: 'U',
	topic: 'HE',
	url: 'OUT TAKES FROM: http://www.humanillnesses.com/',
	element: false,
	filter: [],
	clean: function() {

		var output = {
			type: "array",
			data: "ADD, OCD, ADHD, Pressure Sores, Enuresis, Disease CJD, CJD, Aphthous Ulcers, Syncope, IBS, Rubella, Dyspepsia, Infectious, Dissociative Identity Disorder, Disorder, Disease, PID, PKU, Enterobiasis, STD, TMJ, Pertussis, Vaginal, Enuresis, Neurochemistry, Encopresis, Tourettes, Immunization, Valley Fever, CMV Infection, Disease CJD, Pericarditis, Ear Infections, Whooping Cough, German Measles, STDs, Lockjaw, Chicken Pox, Herpes, Zoster, Shingles, Infections".split(', ')
		};

		return output;
	}
};