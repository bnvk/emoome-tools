// writing_1.js
module.exports = {
	title: 'Writing Words',
	full: 'writing',
	language: 'english',
	type: 'U',
	topic: 'WR',
	url: 'http://www.onelook.com/?loc=rz7&w=*&clue=writing',
	element: false,
	filter: [],
	clean: function() {

		var output = {
			type: "array",
			data: "write<br> hieroglyphic<br> authorship<br> composition<br> written<br> characters<br> handwritings<br> penning<br> symbolic representation<br> written material<br> word<br> historiography<br> paper<br> escritoire<br> palimpsest<br> pen<br> boustrophedon<br> character<br> discourse<br> stationery<br> good book<br> handwriting<br> holy scripture<br> holy writ<br> ink<br> pencil<br> psalm<br> record<br> style<br> cipher<br> cuneiform<br> document<br> graphic<br> hieroglyph<br> journalism<br> literature<br> note<br> reply<br> stenography<br> davenport<br> drama<br> flourish<br> fustian<br> grammar<br> letter<br> majuscule<br> paleography<br> prose<br> screed<br> secretary<br> shorthand<br> slate<br> unwritten<br> vellum<br> voluminous<br> amphigory<br> blank<br> bureau<br> clipboard<br> cursive<br> foolscap<br> letter paper<br> lexicography<br> longhand<br> notepaper<br> orthography<br> phonography<br> poetry<br> printing<br> quill<br> scriptorium<br> secretaire<br> skywriting<br> verse<br> writ<br> adoxography<br> anopisthographic<br> autograph<br> capitalization<br> chrysography<br> cryptogram<br> cryptograph<br> eulogy<br> journalese<br> literary<br> penmanship".split('<br> ')
		};

		return output;
	}
};