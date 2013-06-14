// perception_1.js
module.exports = {
	title: 'Perception Words',
	full: 'perception',
	language: 'english',
	type: 'I',
	topic: 'PE',
	url: 'http://thesaurus.com/browse/perceive',
	element: false,
	filter: [],
	clean: function() {

		var output = {
			type: "array",
			data: "apperceive, apprehend, be aware of, behold, descry, discern, discover, distinguish, divine, espy, feel, grasp, identify, look, make out, mark, mind, note, observe, realize, recognize, regard, remark, seize, sense, spot, spy, miss, neglect, overlook, acknowledge, apprehend, be aware of, be cognizant of, be conscious of, catch the drift, comprehend, dig, fathom, grasp, know, perceive, read, realize, recognize, savvy, see daylight, sympathize with, take account of, understand, absorb, accept, appreciate, believe, catch, comprehend, conceive, digest, fathom, get, get the picture, grasp, have, imagine, know, perceive, read, realize, recognize, sense, think".split(', ')
		};

		return output;
	}
};