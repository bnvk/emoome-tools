// sight_1.js
module.exports = {
	title: 'Sight Words',
	full: 'sight',
	language: 'english',
	type: 'S',
	topic: 'SG',
	url: 'http://www.merriam-webster.com/thesaurus/sight[noun]',
	element: false,
	filter: [],
	clean: function() {
	
		var output = {
			type: "array",
			data: "afterimage, appearance, apperception, apprehension, eye, eyes, eyeshot, eyesight, field of vision, ken, perception, range of vision, seeing, view, viewing, visibility, vision, amaurotic, argus, bright, clear, deep, eagle, goggle, hawk, keen, macromeritic, macroscopic, ocular, ophthalmic, optic, optical, presbyopic, scopic, seeing, specious, strabismus, subvisible, twenty, visual, wide, winking, cast, eye, gander, glance, glimpse, peek, peep, regard, sight, view, gape, gaze, glare, leer, ogle, stare, side-glance, squinny, squint, coup doeil, myopia, nearsightedness, farsightedness, hypermetropia, hyperopia, presbyopia, aniseikonia, astigmatism, diplopia, squint, strabismus, double vision, see, seeing, sightings, behold, catch, descry, discern, distinguish, espy, eye, look, note, notice, observe, perceive, regard, remark, sight, spot, spy, view, witness".split(', ')
		};

		return output;
	}
};