// sleep_2.js
module.exports = {
	title: 'Sleep Words',
	full: 'sleep',
	language: 'english',
	type: 'P',
	topic: 'SL',
	url: 'http://onlineslangdictionary.com/thesaurus/words+meaning+sleep+(related+to).html',
	element: false,
	filter: [],
	clean: function() {

		var output = {
			type: "array",
			data: "call it a night – catch some z's – cat nap – crash – crash out – doze off – get forty winks – get some z's – go moo-moo – gouch – hit the sack – nod – nod off – nod out – passed out – rack – sack, the – saw wood – shut-eye – snooze – winks – zonked – zonked out – z's".split(' – ')
		};

		return output;
	}
};