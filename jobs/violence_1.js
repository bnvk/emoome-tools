// violence_1.js
module.exports = {
	title: 'Violence Words',
	full: 'violence',
	language: 'english',
	type: 'D',
	topic: 'V',
	url: 'http://www.enchantedlearning.com/wordlist/military.shtml',
	element: false,
	filter: [],
	clean: function() {

		var output = {
			type: "array",
			data: "academy<br> admiral<br> advance<br> aircraft<br> aircraft carrier<br> air force<br> ally<br> amphibious vehicle<br> armistice<br> armor<br> armored vehicle<br> armory<br> arms<br> army<br> arsenal<br> artillery<br> assault<br> at ease<br> attack<br> attention<br> barracks<br> base<br> battalion<br> battle<br> battlefield<br> battery<br> besiege<br> billet<br> bivouac<br> bombard<br> bombardment<br> brig<br> brigade<br> cadet<br> camouflage<br> captain<br> capture<br> carrier<br> casualty<br> cavalry<br> chaplain<br> coast guard<br> colonel<br> combat<br> command<br> commander<br> commanding officer<br> commission<br> company<br> conflict<br> conquest<br> conscription<br> convoy<br> corporal<br> corps<br> covert<br> crew<br> defeat<br> defend<br> defense<br> destroyer<br> detonate<br> division<br> dog tags<br> draft<br> encampment<br> encode<br> enemy<br> engage<br> enlist<br> ensign<br> epaulet<br> evacuate<br> explosive<br> field hospital<br> field marshal<br> fight<br> fire<br> fireteam<br> force<br> front<br> formation<br> fort<br> fortification<br> furlough<br> garrison<br> general<br> geneva convention<br> grunt<br> guerrilla<br> gunnery sergeant<br> headquarters<br> helmet<br> honor<br> hospital<br> infantry<br> injury<br> insignia<br> intelligence<br> invade<br> invasion<br> jeep<br> kill<br> lance corporal<br> leave<br> lieutenant<br> lose<br> machete<br> major<br> marines<br> medal<br> medic<br> maneuver<br> marksman<br> mess hall<br> mia<br> midshipman<br> military<br> mine<br> national security<br> navy<br> neutral<br> night-vision goggles<br> offense<br> officer<br> ordnance<br> paratrooper<br> peace<br> peace treaty<br> pentagon<br> petty officer<br> platoon<br> post<br> pow<br> prisoner of war<br> private<br> pt boat<br> purple heart<br> quartermaster<br> radar<br> rank<br> reconnoiter<br> recruit<br> regiment<br> rescue<br> reserves<br> retreat<br> sabotage<br> sailor<br> salute<br> salvo<br> seaman<br> section<br> sergeant<br> service<br> shell<br> shoot<br> shot<br> siege<br> sniper<br> soldier<br> specialist<br> squad<br> squadron<br> staff<br> star<br> stockade<br> surrender<br> tactical<br> tactics<br> task force<br> theater<br> troops<br> truce<br> uniform<br> unit<br> veteran<br> volley<br> war<br> warfare<br> warrant officer<br> warrior<br> win<br> wound<br> yeoman<br> zulu time".split('<br> ')
		};

		return output;
	}
};