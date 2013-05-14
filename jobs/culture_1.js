// legal_2.js
module.exports = {
	title: 'Culture Words',
	full: 'culture',
	language: 'english',
	type: 'U',
	topic: 'CU',
	url: 'http://www.enchantedlearning.com/wordlist/languages.shtml',
	element: false,
	filter: [],
	clean: function() {

		var output = {
			type: "array",
			data: "abkhaz<br> afrikaans<br> albanian<br> amharic<br> arabic<br> armenian<br> assamese<br> basque<br> belarusian<br> bengali<br> berber<br> bhojpuri<br> bosnian<br> bulgarian<br> burmese<br> cantonese chinese<br> catalan<br> chichewa<br> chinese<br> chipewyan<br> cree<br> croatian<br> czech<br> danish<br> dutch<br> english<br> estonian<br> faroese fijian<br> filipino<br> finnish<br> french<br> frisian<br> fula<br> gaelic<br> gan<br> georgian<br> german<br> greek<br> gujarati<br> haitian creole<br> hakka<br> hausa<br> hawaiian<br> hebrew<br> hindi<br> hmong<br> hungarian<br> ibibio<br> icelandic<br> igbo<br> inuinnaqtun<br> inukitut<br> irish<br> italian<br> japanese<br> javanese<br> kannada<br> kashmiri<br> kazakh<br> khmer<br> korean<br> kurdish<br> kyrgyz<br> lao<br> latvian<br> lithuanuan<br> lugandan<br> luxembourgish<br> macedonian<br> madurese<br> maithili<br> malagasy<br> malay<br> malayalam<br> maltese<br> mandarin chinese<br> manx gaelic<br> maori<br> marathi<br> mayan<br> min<br> moldovian<br> mongolian<br> montenegran<br> ndebele<br> nepali<br> northern sotho<br> norwegian<br> oriya<br> oromo<br> ossetian<br> pashto<br> persian<br> polish<br> portuguese<br> punjabi<br> quechua<br> romanian<br> russian<br> sami<br> sanskrit<br> serbian<br> shona<br> sign language<br> sindhi<br> sinhala<br> slovak<br> slovene<br> somali<br> sotho<br> spanish<br> sranan tongo<br> sunda<br> swahili<br> swati<br> swedish<br> tagalog<br> tahitian<br> tibetan<br> tajik<br> tamil<br> telugu<br> tetum<br> thai<br> tok pisin<br> tsonga<br> turkish<br> turkmen<br> twi<br> ukrainian<br> urdu<br> uzbek<br> venda<br> vietnamese<br> welsh<br> wu<br> xhosa<br> xiang<br> yiddish<br> yoruba<br> yue<br> zhuang<br> zulu<br>".split('<br> ')
		};

		return output;
	}
};