// nature_4.js
module.exports = {
	title: 'Nature Words',
	full: 'nature',
	language: 'english',
	type: 'U',
	topic: 'N',
	url: 'http://www.enchantedlearning.com/wordlist/spring.shtml',
	element: false,
	filter: [],
	clean: function() {
	
		var output = {
			type: "array",
			data: "birth<br> bloom<br> blossom<br> breeze<br> bud<br> bulbs<br> chick<br> crocus<br> daffodil<br> flowers<br> grass<br> grow<br> hyacinth<br> life cycle<br> melt<br> narcissus<br> nest<br> pasque flower<br> puddles<br> rain<br> rainbow<br> season<br> showers<br> snowdrop<br> sprout<br> sunshine<br> thaw<br> tulip<br> vernal equinox<br> weather<br> windy".split('<br> ')
		};

		return output;
	}
};