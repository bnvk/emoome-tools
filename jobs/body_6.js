// body_6.js
module.exports = {
	title: 'Body Words',
	full: 'body',
	language: 'english',
	type: 'P',
	topic: 'B',
	url: 'http://www.educationalinsights.com/text/EI/downloads/products/HumanBodyModels/5401_humanteeth.pdf',
	element: false,
	filter: [],
	clean: function() {

		var output = {
			type: "array",
			data: "alveolus, apex, bicuspids, canines, cementum, crown, cusps, deciduous teeth, dentin, enamel, incisors, Premolar, molars, periodontal ligament, permanent teeth, pulp, root, Ridges, wisdom teeth, tooth, Embrasures, Mammelons, gums, saliva, salivary".split(', ')
		};

		return output;
	}
};