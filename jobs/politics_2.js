// politics_2.js
module.exports = {
	title: 'Politics Words',
	full: 'politics',
	language: 'english',
	type: 'U',
	topic: 'PO',
	url: 'http://www.enchantedlearning.com/wordlist/election.shtml',
	element: false,
	filter: [],
	clean: function() {
	
		var output = {
			type: "array",
			data: "absentee ballot<br> ballot<br> ballot box<br> campaign<br> candidate<br> caucus<br> choose<br> congress<br> constitution<br> convention<br> count<br> delegate<br> democracy<br> democrat<br> elect<br> election<br> elector<br> electoral college<br> electorate<br> executive branch<br> exit poll<br> front runner<br> general election<br> gerrymander<br> incumbent<br> independent<br> issues<br> legislative branch<br> lobbyist<br> lose<br> loser<br> majority<br> mayor<br> midterm elections<br> minority<br> negative ads<br> officials<br> open primary<br> party<br> platform<br> plurality<br> political<br> politics<br> politician<br> poll<br> popular vote<br> precinct<br> promises<br> president<br> primary<br> protest vote<br> recount<br> redistricting<br> referendum<br> represent<br> republican<br> runoff<br> senator<br> speeches<br> stance<br> straw vote<br> suffrage<br> super delegate<br> super tuesday<br> swing vote<br> tally<br> term<br> term limits<br> third party<br> town meeting<br> us constitution<br> vote<br> voter<br> voting booth<br> voting machine<br> win<br> winner".split('<br> ')
		};

		return output;
	}
};