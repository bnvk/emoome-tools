// art_1.js
module.exports = {
	title: 'Nature Words',
	full: 'nature',
	language: 'english',
	type: 'U',
	topic: 'N',
	url: 'http://www.enchantedlearning.com/wordlist/winter.shtml',
	element: false,
	filter: [],
	clean: function() {

		var output = {
			type: "array",
			data: "arctic<br> black ice<br> blizzard<br> blustery<br> brisk<br> chill<br> chills<br> chilly<br> cold snap<br> drafty<br> evergreen<br> fire<br> firewood<br> fog<br> freezing rain<br> frostbite<br> frosty<br> gale<br> glacial<br> glacier<br> gust<br> hailstone<br> ice<br> iceberg<br> ice cap<br> ice crystal<br> ice dam<br> ice fishing<br> ice storm<br> icicle<br> icy<br> log<br> pinecone<br> polar<br> sleet<br> solstice<br> slush<br> snow<br> snowball<br> snowbound<br> snowfall<br> snowflake<br> snowman<br> snowstorm<br> snowy<br> storm<br> wind<br> windy<br> winter<br> wintertime<br> wintry".split('<br> ')
		};

		return output;
	}
};