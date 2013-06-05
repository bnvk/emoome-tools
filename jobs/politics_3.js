// politics_3.js
module.exports = {
	title: 'Politics Words',
	full: 'politics',
	language: 'english',
	type: 'U',
	topic: 'PO',
	url: 'http://www.enchantedlearning.com/wordlist/presidentsday.shtml',
	element: false,
	filter: [],
	clean: function() {
	
		var output = {
			type: "array",
			data: "abraham lincoln<br> american revolution<br> battles<br> bill of rights<br> cherry tree<br> colonists<br> commander in chief<br> congress<br> constitution<br> continental army<br> continental congress<br> democracy<br> dentures<br> elected<br> election<br> electoral college<br> false teeth<br> father of the country<br> federal holiday<br> first president<br> flag<br> forefather<br> george washington<br> government<br> leader<br> leadership<br> liberty bell<br> lincoln<br> martha washington<br> military<br> mount vernon<br> nation<br> national<br> oath of office<br> patriot<br> patriotism<br> political<br> political party<br> politics<br> president<br> president's day<br> redcoats<br> red, white and blue<br> revolution<br> revolutionary war<br> seventeen seventy-six<br> 1776<br> stars and stripes<br> states<br> thirteen colonies<br> unanimous election<br> us constitution<br> vice-president<br> vote<br> war<br> washington<br> washington, d. c.<br> white house<br> whitehouse".split('<br> ')
		};

		return output;
	}
};