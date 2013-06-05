// events_1.js
module.exports = {
	title: 'Events Words',
	full: 'events',
	language: 'english',
	type: 'D',
	topic: 'EV',
	url: 'http://www.enchantedlearning.com/wordlist/holidays.shtml',
	element: false,
	filter: [],
	clean: function() {

		var output = {
			type: "array",
			data: "april fools day<br> arbor day<br> bastille day<br> boxing day<br> canada day<br> chinese new year<br> christmas<br> cinco de mayo<br> columbus day<br> day of the dead<br> diwali<br> earth day<br> easter<br> election day<br> emancipation day<br> fathers day<br> flag day<br> grandparent's day<br> groundhog day<br> guy fawkes day<br> halloween<br> hanukkah<br> independence day<br> july 4<br> juneteenth<br> martin luther king<br> kwanzaa<br> labor day<br> lincolns birthday<br> mardi gras<br> shrove tuesday<br> martin luther king jr.<br> may day<br> memorial day<br> mother's day<br> new years day<br> new years eve<br> passover<br> pi day<br> presidents day<br> purim<br> ramadan<br> rosh hashanah<br> st. patricks day<br> st. valentines day<br> thanksgiving<br> valentines day<br> ve day<br> veterans day<br> washingtons birthday<br> world environment day<br> yom kippur".split('<br> ')
		};

		return output;
	}
};