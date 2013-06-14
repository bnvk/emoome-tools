// writing_5.js
module.exports = {
	title: 'Writing Words',
	full: 'writing',
	language: 'english',
	type: 'I',
	topic: 'WR',
	url: 'http://en.wikipedia.org/wiki/Creative_writing',
	element: false,
	filter: [],
	clean: function() {

		var output = {
			type: "array",
			data: "Character</li> Point of View</li> Plot</li> Setting</li> Dialogue (fiction)</li> Style (fiction)</li> Motif</li> Autobiography</li> Memoir</li> Collaborative writing</li> Creative non-fiction</li> Journalistic Essays)</li> Epic</li> Flash fiction</li> Novel</li> Novella</li> Dramatic writing</li> Poetry</li> Screenwriting</li> Short story</li> Songwriting</li> Bibliography</li> Stream of consciousness</li> Narrative mode</li> Asemic writing</li> Author</li> Book report</li> Creativity</li> Electronic literature</li> Expository writing</li> Fan fiction</li> Fiction writing</li> Literature</li> Writers block</li> Writing</li> Writing circle</li> Writing process</li> Writing style</li> Writing Workshop</li> Writers Workshop</li> Prose".split('</li> ')
		};

		return output;
	}
};