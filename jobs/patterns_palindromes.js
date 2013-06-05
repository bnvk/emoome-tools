// patterns_palindromes.js
module.exports = {
	title: 'Palindromes',
	full: 'patterns',
	language: 'english',
	type: 'palindromes',
	topic: 'patterns',
	url: '',
	element: false,
	filter: [],
	clean: function() {

		var output = {
			type: "array",
			data: "bib<br> bub<br> civic<br> dad<br> did<br> eve<br> ewe<br> eye<br> level<br> gag<br> kayak<br> madam<br> mom<br> peep<br> pep<br> pop<br> noon<br> radar<br> redder<br> refer<br> redivider<br> rotator<br> sagas<br> sees<br> sis<br> solos<br> stats<br> tenet<br> tnt<br> toot<br> tot<br> tut<br> wow".split('<br> ')
		};

		return output;
	}
};