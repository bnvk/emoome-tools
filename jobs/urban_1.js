// urban_1.js
module.exports = {
	title: 'Urban Words',
	full: 'urban',
	language: 'english',
	type: 'S',
	topic: 'UR',
	url: 'http://www.enchantedlearning.com/wordlist/stores.shtml',
	element: false,
	filter: [],
	clean: function() {

		var output = {
			type: "array",
			data: "access road<br> avenue<br> back road<br> beltway<br> boulevard<br> bridge<br> byway<br> causeway<br> circle<br> cloverleaf<br> country road<br> county road<br> crescent<br> cul-de-sac<br> dead end street<br> dirt road<br> divided highway<br> drive<br> entrance ramp<br> exit ramp<br> expressway<br> feeder road<br> freeway<br> frontage road<br> grid road<br> highway<br> interchange<br> intersection<br> interstate highway<br> lane<br> motorway<br> one-way street<br> overpass<br> parkway<br> pass<br> passage<br> place<br> post road<br> road<br> roadway<br> roundabout<br> route<br> secondary road<br> service road<br> side road<br> span<br> speedway<br> state road<br> street<br> superhighway<br> surface road thoroughfare<br> thruway<br> toll road<br> trail<br> traffic circle<br> turnpike<br> underpass<br> viaduct<br> walk<br> walkway<br> way".split('<br> ')
		};

		return output;
	}
};