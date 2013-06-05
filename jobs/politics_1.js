// politics_1.js
module.exports = {
	title: 'Politics Words',
	full: 'politics',
	language: 'english',
	type: 'U',
	topic: 'PO',
	url: 'http://www.enchantedlearning.com/wordlist/constitution.shtml',
	element: false,
	filter: [],
	clean: function() {
	
		var output = {
			type: "array",
			data: "allegiance<br> amend<br> amendment<br> appoint<br> army<br> article<br> assembly<br> ballot<br> bicameral<br> bill<br> bill of rights<br> branches of government<br> cabinet<br> census<br> checks and balances<br> chief executive<br> citizen<br> citizenship<br> civil<br> commander in chief<br> congress<br> congressional<br> constitution<br> constitutional<br> constitutional convention<br> convention<br> country<br> court<br> court system<br> currency<br> debt<br> defense<br> democracy<br> document<br> duty<br> election<br> elector<br> electoral college<br> electorate<br> executive branch<br> federal<br> federal government<br> founding fathers<br> framers of the us constitution<br> freedom<br> government<br> house of representatives<br> impeach<br> impeachment<br> judge<br> judicial<br> judicial branch<br> jury<br> justice<br> law<br> leader<br> legal<br> legislate<br> legislative branch<br> legislature<br> liberty<br> local<br> magna carta<br> majority<br> military<br> monarchy<br> nation<br> national<br> negotiate<br> oath<br> office<br> official<br> people<br> pledge<br> poll<br> populace<br> population<br> power<br> preamble<br> president<br> public<br> quorum<br> ratify<br> ratification<br> regulate<br> regulation<br> representative<br> republic<br> responsibility<br> revenue<br> rights<br> rule<br> senate<br> senatorial<br> separation of power<br> sign<br> signature<br> states<br> succession<br> suffrage<br> supreme court<br> tax<br> taxation<br> term<br> tranquility<br> treasury<br> treason<br> treaty<br> trial<br> union<br> united states of america<br> usa<br> us constitution<br> veto<br> vice-president<br> vote<br> war<br> welfare<br> writ".split('<br> ')
		};

		return output;
	}
};