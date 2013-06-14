// intelligence_1.js
module.exports = {
	title: 'Intelligence Words',
	full: 'intelligence',
	language: 'english',
	type: 'I',
	topic: 'I',
	url: 'http://thesaurus.com/browse/intelligence',
	element: false,
	filter: [],
	clean: function() {

		var output = {
			type: "array",
			data: "IQ, acuity, acumen, agility, alertness, aptitude, brainpower, brains, brightness, brilliance, capacity, cleverness, comprehension, coruscation, discernment, gray matter, intellect, judgment, luminosity, mentality, mind, penetration, perception, perspicacity, precocity, quickness, quotient, reason, sagacity, savvy, sense, skill, clever, smart, smarts, subtlety, the right stuff, trenchancy, understanding, what it takes, wit,  ignorance, inability, ineptness, intelligence, capacity, comprehension, understanding, cuteness, sabe, savvy, intellect, nous, parts, sagacity, mother wit, wit, esprit, gumption, quick parts, grasp of intellect, acuteness, acumen, subtlety, penetration, perspicacy,  perspicacity, discernment, due sense of, good judgment, discrimination, cunning, head, brains, wisdom, sapience, sense, good sense, common sense, horse sense, plain sense, rationality, reason, reasonableness, judgment, solidity, depth, profundity, caliber, enlarged views, reach of thought, compass of thought, enlargement of mind, genius, inspiration, geist, fire of genius, heaven-born genius, talent, aptitude, wisdom in action, prudence, vigilance, tact, foresight, self-possession, aplomb, ballast, a bright thought, thought, think, thinking, not a bad idea, witty, acuity, acuteness, astuteness, brain, brainpower, breadth, brightness, brilliance, clandestine operation, cleverness, combat intelligence, comprehensiveness, counterintelligence, current intelligence, genius, good word, intellect, keenness, learning ability, mental capacity, mentality, mental quickness, mind, nonverbal intelligence, overt operation, perspicaciousness, perspicacity, precociousness, precocity, quickness, quick-wittedness, reconnaissance, sharpness, shrewdness, sigint, signals intelligence, smartness, spying, strategic intelligence, tactical intelligence, undercover work, update, verbal intelligence, wit".split(', ')
		};

		return output;
	}
};