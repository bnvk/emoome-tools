// places_1.js
module.exports = {
	title: 'Places Words',
	full: 'places',
	language: 'english',
	type: 'U',
	topic: 'PL',
	url: 'http://www.enchantedlearning.com/wordlist/geography.shtml',
	element: false,
	filter: [],
	clean: function() {

		var output = {
			type: "array",
			data: "africa<br> altitude<br> analemma<br> antarctica<br> antarctic circle<br> antipodes<br> arctic<br> arctic circle<br> area<br> asia<br> atlas<br> australia<br> azimuth<br> bathymetric map<br> border<br> capital<br> capital city<br> cartographer<br> cartography<br> chart<br> city<br> compass rose<br> continent<br> contour line<br> country<br> degree of latitude<br> degree of longitude<br> earth<br> east<br> eastern hemisphere<br> elevation<br> equator<br> europe<br> geographic coordinates<br> geography<br> global<br> globe<br> gps<br> great circle<br> hemisphere<br> idl<br> international date line<br> island<br> key<br> kilometers<br> land<br> landform<br> latitude<br> legend<br> longitude<br> magnetic pole<br> map<br> map-maker<br> map-making<br> map projection<br> mercator projection<br> meridian<br> nation<br> nautical chart<br> north<br> northeast<br> northern hemisphere<br> northwest<br> north america<br> north magnetic pole<br> north pole<br> parallel<br> peak<br> pole<br> political map<br> prime meridian<br> projection<br> ratio<br> region<br> relief map<br> road atlas<br> rose<br> scale<br> scale bar<br> sea<br> sea level<br> south<br> southeast<br> southwest<br> south america<br> southern hemisphere<br> south magnetic pole<br> south pole<br> street map<br> territory<br> topographic map<br> topography<br> tributary<br> tropic of cancer<br> tropic of capricorn<br> tropics<br> weather map<br> west<br> western hemisphere<br> world".split('<br> ')
		};

		return output;
	}
};