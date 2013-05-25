// nature_10.js
module.exports = {
	title: 'Nature Words',
	full: 'nature',
	language: 'english',
	type: 'S',
	topic: 'N',
	url: 'http://www.enchantedlearning.com/wordlist/water.shtml',
	element: false,
	filter: [],
	clean: function() {

		var output = {
			type: "array",
			data: "artesian well<br> aqua<br> black ice<br> blizzard<br> body of water<br> brook<br> cloudburst<br> dew<br> dew-drop<br> drizzle<br> flood<br> fluvial<br> freezing rain<br> fresh water<br> frost<br> geyser<br> hail<br> headwaters<br> hoarfrost<br> hurricane<br> ice<br> ice crystals<br> icicle<br> ice pellets<br> lake<br> meander<br> monsoon<br> oxbow<br> pluvial<br> pond<br> pool<br> potable<br> precipitation<br> puddle<br> rain<br> riparian<br> river<br> rivulet<br> runoff<br> saline<br> saturated<br> seep<br> seepage<br> shower<br> sleet<br> slush<br> snow<br> snowfall<br> snowflake<br> snow flurry<br> snowmelt<br> snowstorm<br> soggy<br> spring<br> steam<br> stream<br> surf<br> swampy<br> tide<br> tributary<br> typhoon<br> vapor<br> water<br> water cycle<br> water drop<br> waterfall<br> waterfront<br> waterlogged<br> waterproof<br> watershed<br> waterspout<br> water vapor<br> waterway<br> waves<br> wet<br> wetlands".split('<br> ')
		};

		return output;
	}
};