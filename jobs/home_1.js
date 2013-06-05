// home_1.js
module.exports = {
	title: 'Home Words',
	full: 'home',
	language: 'english',
	type: 'D',
	topic: 'H',
	url: 'http://www.enchantedlearning.com/wordlist/furniture.shtml',
	element: false,
	filter: [],
	clean: function() {
	
		var output = {
			type: "array",
			data: "armchair<br> armoire<br> bar stool<br> bassinet<br> beach chair<br> bean bag chair<br> bed<br> bed table<br> bench<br> bentwood rocker<br> bergere<br> bookcase<br> bookshelf<br> breakfront<br> buffet<br> bunk bed<br> bureau<br> cabinet<br> canopy bed<br> captains chair<br> card table<br> carpet<br> cart<br> chair<br> chaise lounge<br> chandelier<br> chest<br> chest of drawers<br> china cabinet<br> clothes valet<br> club chair<br> coffee table<br> console<br> cot<br> couch<br> cradle<br> credenza<br> crib<br> cubbies<br> cupboard<br> curio<br> curtains<br> cushion<br> deck chair<br> desk<br> desk chair<br> dining room table<br> directors chair<br> display cabinet<br> divan<br> drapery<br> drapes<br> dresser<br> easel<br> easy chair<br> end table<br> fateuil<br> file cabinet<br> folding chair<br> folding screen<br> footrest<br> footstool<br> four-poster bed<br> furnishings<br> furniture<br> futon<br> game table<br> garden bench<br> gateleg table<br> glider rocker<br> grandfather clock<br> hall tree<br> hammock<br> hassock<br> hat stand<br> headboard<br> highchair<br> hope chest<br> hutch<br> island<br> kitchen island<br> ladderback chair<br> lamp<br> lawn chair<br> lift chair<br> light<br> lintel<br> lounge chair<br> lounger<br> love seat<br> mantle<br> mattress<br> mirror<br> murphy bed<br> nightstand<br> office chair<br> ottoman<br> pantry<br> park bench<br> patio chair<br> patio table<br> pew<br> piano bench<br> picnic table<br> pillow<br> porch swing<br> rack<br> recliner<br> rocking chair<br> room divider<br> rug<br> sconce<br> screen<br> seat<br> secretary<br> sectional sofa<br> settee<br> shelf<br> shoji screen<br> sideboard<br> sleeper sofa<br> sofa<br> sofabed<br> stool<br> table<br> tansu<br> tea cart<br> throne<br> throw rug<br> trundle bed<br> tuffet<br> valet<br> vanity<br> venetian blinds<br> vitrine<br> wardrobe<br> waste basket<br> waterbed<br> window shades<br> windsor chair<br> wing chair<br> work table<br> writing desk".split('<br> ')
		};

		return output;
	}
};