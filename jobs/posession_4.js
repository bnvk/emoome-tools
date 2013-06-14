// posession_4.js
module.exports = {
	title: 'Posession Words',
	full: 'posession',
	language: 'english',
	type: 'U',
	topic: 'PI',
	url: 'http://www.merriam-webster.com/dictionary/possession',
	element: false,
	filter: [],
	clean: function() {
	
		var output = {
			type: "array",
			data: "command, enjoy, hold, own, have, retain, lack, want, keep, reserve, withhold, bear, carry, boast, show off, sport, abandon, cede, disclaim, disown, hand over, relinquish, renounce, surrender, yield, discard, dump, decline, reject, repudiate, spurn, need, require, control, enjoyment, hands, keeping, nonpossession, ownership, proprietorship, authority, command, dominion, mastery, power, repossession, retention, claiming, collaring, commandeering, confiscation, procurement, dispossession, relinquishment, surrendering, transferal".split(', ')
		};

		return output;
	}
};