/* art_1.js
	$ node scraper.js save _api AG age age_intellectual
*/
module.exports = {
	title: process.argv[5] + ' Words',
	full: process.argv[5],
	language: 'english',
	type: 'U',
	topic: process.argv[4],
	url: 'http://localhost/emoome/utilities/show_language_file/' + process.argv[5] + '/' + process.argv[6],
	element: 'json',
	filter: [],
	clean: ''
};