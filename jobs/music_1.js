// music_1.js
module.exports = {
	title: 'Music Words',
	full: 'music',
	language: 'english',
	type: 'S',
	topic: 'MU',
	url: 'http://www.enchantedlearning.com/wordlist/musicalinstruments.shtml',
	element: false,
	filter: [],
	clean: function() {

		var output = {
			type: "array",
			data: "accordion<br> acoustic guitar<br> aeolian harp<br> alphorn<br> alto saxophone<br> anvil<br> baby grand piano<br> bagpipe<br> balalaika<br> bandoneón<br> bandura<br> banjo<br> baritone horn<br> bass<br> bass clarinet<br> bass drum<br> bass guitar<br> bassoon<br> bell<br> bongo drum<br> bouzouki<br> bow<br> brass instruments<br> bugle<br> calliope<br> carillon<br> castanets<br> celesta<br> cello<br> celtic harp<br> chimes<br> cimbalom<br> clarinet<br> classical guitar<br> clavichord<br> clavier<br> concertina<br> conch<br> conga drum<br> contrabass<br> cornet<br> cowbell<br> cymbals<br> didgeridoo<br> double bass<br> drum<br> drumsticks<br> dulcimer<br> electric guitar<br> electric organ<br> english horn<br> euphonium<br> fiddle<br> fife<br> flugelhorn<br> flute<br> french horn<br> glockenspiel<br> gong<br> grand piano<br> guitar<br> hammered dulcimer<br> harmonica<br> harmonium<br> harp<br> harpsichord<br> helicon<br> horn<br> hurdy gurdy<br> instrument<br> jaw harp<br> jew's harp<br> kazoo<br> kettledrum<br> keyboard<br> lute<br> lyre<br> mallets<br> mandolin<br> maracas<br> marimba<br> mellophone<br> melodeon<br> moog synthesizer<br> musical instruments<br> musical saw<br> mute<br> oboe<br> ocarina<br> organ<br> pan pipes<br> penny whistle<br> percussion<br> piano<br> piccolo<br> pipa<br> pipe organ<br> player piano<br> pump organ<br> rainstick<br> rattle<br> recorder<br> reed<br> saw<br> saxophone<br> sitar<br> slide whistle<br> snare drum<br> spinet<br> spoons<br> steel drum<br> sousaphone<br> steel drum<br> steel guitar<br> string bass<br> string instruments<br> strings<br> synthesizer<br> tabla<br> tambourine<br> theramin<br> thumb piano<br> timpani<br> tin whistle<br> tom-tom drum<br> triangle<br> trombone<br> trumpet<br> tuba<br> tubular bells<br> ukulele<br> upright piano<br> valve<br> vibraphone<br> viola<br> viola da gamba<br> violin<br> violincello<br> vuvuzela<br> wagner tuba<br> washboard<br> whistle<br> wind chime<br> wind instruments<br> woodwind instruments<br> xylophone<br> zither".split('<br> ')
		};

		return output;
	}
};