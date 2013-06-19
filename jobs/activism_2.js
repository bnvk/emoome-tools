// activism_2.js
module.exports = {
	title: 'Activisim Words',
	full: 'activism',
	language: 'english',
	type: 'U',
	topic: 'AT',
	url: 'http://en.wikipedia.org/wiki/Activism',
	element: false,
	filter: [],
	clean: function() {

		var output = {
			type: "array",
			data: "Civil disobedience, Community building, Conflict transformation, Cooperative movement, Craftivism, Voluntary simplicity, Dissident, Economic activism, Boycott, Guerrilla gardening, Freeganism, Veganism, Vegetarianism, Consumer activism, Divestment, Simple living, Tax resistance, Franchise activism, Lobbying, Media activism, Culture jamming, Hacktivism, Internet activism, Nonviolence, Peace activist, Peace movement, Political campaigning, Propaganda, Guerrilla communication, Protest, Demonstration, Direct action, Protest songs, Theater for Social Change, Strike action, Youth activism, Student activism, Youth-led media, Atheist activism, Advocacy Evaluation, Advocacy group, Agitator, Counterculture, 1960s, Cultural Marxism, Community leader, Saul Alinsky, Feminism, Master Legend, Restorationism, Social engineering, Social movement, Virtual volunteering, advocacy, boycotting, championing, effecting change, influence peddling, involvement, logrolling, militancy, moving and shaking, picketing, striking".split(', ')
		};

		return output;
	}
};