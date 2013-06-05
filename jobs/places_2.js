// places_2.js
module.exports = {
	title: 'Places Words',
	full: 'places',
	language: 'english',
	type: 'D',
	topic: 'PL',
	url: 'http://www.enchantedlearning.com/wordlist/country.shtml',
	element: false,
	filter: [],
	clean: function() {

		var output = {
			type: "array",
			data: "afghanistan<br> albania<br> algeria<br> andorra<br> angola<br> antigua and barbuda<br> argentina<br> armenia<br> australia<br> austria<br> azerbaijan<br> bahamas<br> bahrain<br> bangladesh<br> barbados<br> belarus<br> belgium<br> belize<br> benin<br> bhutan<br> bolivia<br> bosnia and herzegovina<br> botswana<br> brazil<br> brunei<br> bulgaria<br> burkina faso<br> burma<br> burundi<br> cambodia<br> cameroon<br> canada<br> cape verde<br> central african republic<br> chad<br> chile<br> china<br> cambodia<br> comoros<br> congo, dem. rep. of the<br> congo, rep of the<br> costa rica<br> côte d'ivoire<br> croatia<br> cuba<br> cyprus<br> czech republic<br> denmark<br> djibouti<br> dominica<br> dominican republic<br> east timor<br> ecuador<br> egypt<br> el salvador<br> equatorial guinea<br> eritrea<br> estonia<br> ethiopia<br> fiji<br> finland<br> france<br> gabon<br> the gambia<br> georgia<br> germany<br> ghana<br> greece<br> grenada<br> guatemala<br> guinea<br> guinea-bissau<br> guyana<br> haiti<br> honduras<br> hungary<br> iceland<br> india<br> indonesia<br> iran<br> iraq<br> ireland<br> israel<br> italy<br> jamaica<br> japan<br> jordan<br> kazakhstan<br> kenya<br> kiribati<br> korea, north<br> korea, south<br> kuwait<br> kyrgyzstan<br> laos<br> latvia<br> lebanon<br> lesotho<br> liberia<br> libya<br> liechtenstein<br> lithuania<br> luxembourg<br> macedonia<br> madagascar<br> malawi<br> malaysia<br> maldives<br> mali<br> malta<br> marshall islands<br> mauritania<br> mauritius<br> mexico<br> micronesia<br> moldova<br> monaco<br> mongolia<br> montenegro<br> morocco<br> mozambique<br> namibia<br> nauru<br> nepal<br> netherlands<br> new zealand<br> nicaragua<br> niger<br> nigeria<br> norway<br> oman<br> pakistan<br> palau<br> panama<br> papua new guinea<br> paraguay<br> peru<br> philippines<br> poland<br> portugal<br> qatar<br> romania<br> russia<br> rwanda<br> saint kitts and nevis<br> saint lucia<br> saint vincent and the grenadines<br> samoa<br> san marino<br> são tomé and príncipe<br> saudi arabia<br> senegal<br> serbia<br> seychelles<br> sierra leone<br> singapore<br> slovakia<br> slovenia<br> solomon islands<br> somalia<br> south africa<br> spain<br> sri lanka<br> sudan<br> suriname<br> swaziland<br> sweden<br> switzerland<br> syria<br> tajikistan<br> tanzania<br> thailand<br> togo<br> tonga<br> trinidad and tobago<br> tunisia<br> turkey<br> turkmenistan<br> tuvalu<br> uganda<br> ukraine<br> united arab emirates<br> united kingdom<br> united states of america<br> uruguay<br> uzbekistan<br> vanuatu<br> vatican city<br> venezuela<br> vietnam<br> yemen<br> zambia<br> zimbabwe".split('<br> ')
		};

		return output;
	}
};