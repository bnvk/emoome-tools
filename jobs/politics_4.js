// politics_4.js
module.exports = {
	title: 'Politics Words',
	full: 'politics',
	language: 'english',
	type: 'I',
	topic: 'PO',
	url: 'http://www.enchantedlearning.com/wordlist/leaders.shtml',
	element: false,
	filter: [],
	clean: function() {
	
		var output = {
			type: "array",
			data: "abbot<br> administrator<br> admiral<br> archduchess<br> archduke<br> aristocrat<br> authority<br> autocrat<br> baron<br> baroness<br> baronet<br> baronetess<br> bey<br> bishop<br> boss<br> brass<br> brigadier general<br> caliph<br> captain<br> chair<br> chief<br> chieftain<br> chairman<br> chairperson<br> chairwoman<br> chief<br> colonel<br> commandant<br> commander<br> commodore<br> consul<br> controller<br> count<br> countess<br> czar<br> czarina<br> dame<br> dean<br> despot<br> dictator<br> director<br> disciplinarian<br> doge<br> don<br> duchess<br> duke<br> earl<br> elder<br> eminence<br> emir<br> empress<br> emperor<br> excellency<br> executive<br> father<br> feds<br> field marshal general<br> gentry<br> governor<br> grand duchess<br> grand duke<br> guru<br> head<br> head honcho<br> headmaster<br> headmistress<br> head of state<br> heir apparent<br> highness<br> high priest<br> high rank<br> honor<br> imperator<br> infanta<br> infante<br> judge<br> khan<br> king<br> knight<br> lady<br> landed gentry<br> leader<br> lord<br> majesty<br> management<br> manager<br> master<br> matriarch<br> mayor<br> minister<br> mistress<br> monarch<br> mother<br> noble<br> nobility<br> officer<br> oligarch<br> overlord<br> owner<br> pandit<br> patriarch<br> peer<br> pharaoh<br> pilot<br> police chief<br> pope<br> powers that be<br> premier<br> president<br> priest<br> priestess<br> prime minister<br> prince<br> princess<br> principal<br> provost<br> queen<br> raja<br> rana<br> rector<br> regent<br> representative<br> royals<br> royalty<br> ruler<br> sahib<br> senator<br> shah<br> sheik<br> shogun<br> sir<br> skipper<br> sovereign<br> sri<br> sultan<br> superintendent<br> supervisor<br> swami<br> top brass<br> top dog<br> tsar<br> tsarina<br> tycoon<br> tyrant<br> vice-president<br> vidya<br> vip<br> viscount<br> vizier<br> viscountess".split('<br> ')
		};

		return output;
	}
};