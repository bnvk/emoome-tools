// music_2.js
module.exports = {
	title: 'Music Words',
	full: 'music',
	language: 'english',
	type: 'I',
	topic: 'MU',
	url: 'http://www.enchantedlearning.com/wordlist/musictheory.shtml',
	element: false,
	filter: [],
	clean: function() {

		var output = {
			type: "array",
			data: "accelerando<br> adagio<br> accent<br> aeolian mode<br> allegretto<br> allegro<br> andante<br> andantino<br> animato<br> arioso<br> arpeggio<br> bar<br> bass<br> beat<br> blues<br> breath mark<br> cadence<br> canon<br> cantabile<br> chord<br> chromatic scale<br> circle of fifths<br> clef<br> coda<br> con brio<br> counterpoint<br> crescendo<br> crotchet<br> da capo<br> decrescendo<br> demisemiquaver<br> diatonic<br> diminuendo<br> dissonance<br> dolce<br> dominant<br> dorian mode<br> dynamics<br> eighth note<br> eighth rest<br> espressivo<br> fermata<br> fifth<br> fine<br> flag<br> flat<br> forte<br> fortissimo<br> forzando<br> fourth<br> fugue<br> furioso<br> grandioso<br> grave<br> half note<br> half step<br> harmonic major<br> harmonic minor<br> harmonics<br> harmony<br> hemidemisemiquaver<br> interval<br> intonation<br> invention<br> ionian mode<br> jazz<br> key<br> key signature<br> largo<br> ledger line<br> legato<br> lento<br> libretto<br> locrian mode<br> lydian mode<br> major<br> major third<br> marcato<br> measure<br> melodic minor<br> melody<br> meter<br> mezzo forte<br> mezzo piano<br> minim<br> minor<br> minor third<br> mixolydian mode<br> moderato<br> modulation<br> molto<br> music<br> natural<br> natural minor<br> notation<br> notes<br> octatonic<br> octave<br> opera<br> ornament<br> overtone<br> pentatonic<br> pentatonic scale<br> pesante<br> phrase<br> phrygian mode<br> play<br> pianissimo<br> piano<br> pitch<br> pizzicato<br> poco a poco<br> polyphony<br> prestissimo<br> presto<br> quarter note<br> quarter rest<br> quaver<br> quaver rest<br> rallentando<br> repeat<br> religioso<br> rest<br> rhythm<br> ritard<br> rock and roll<br> rubato<br> scale<br> semiquaver<br> semplice<br> sempre<br> scherzando<br> scherzo<br> segno<br> sequence<br> sforzando<br> sharp<br> simile<br> sixteenth note<br> sixty-fourth note<br> slur<br> sonata<br> sostenuto<br> sotto voce<br> staccato<br> staff<br> stave<br> stem<br> subdominant<br> subito<br> supertonic<br> symphony<br> syncopation<br> tablature<br> tempo<br> tenuto<br> theme<br> theory<br> thirty-second note<br> tie<br> timbre<br> time signature<br> tonic<br> tranquillo<br> transposition<br> treble<br> triad<br> trill<br> triplets<br> tritone<br> vibrato<br> vivace<br> whole note<br> whole rest<br> whole step<br> whole tone scale".split('<br> ')
		};

		return output;
	}
};