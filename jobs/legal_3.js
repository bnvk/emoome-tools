// legal_2.js
module.exports = {
	title: 'Legal Words',
	full: 'legal',
	language: 'english',
	type: 'U',
	topic: 'LE',
	url: 'http://www.enchantedlearning.com/wordlist/legal.shtml',
	element: false,
	filter: [],
	clean: function() {

		var output = {
			type: "array",
			data: "acquit<br> affidavit<br> aid and abet<br> allegation<br> appeal<br> appearance<br> argument<br> arrest<br> assault<br> attorney<br> bail<br> bail bond<br> bailiff<br> bankrupt<br> bankruptcy<br> bar<br> bar exam<br> bench warrant<br> bond<br> booking<br> burden of proof<br> capital crime<br> case<br> case law<br> chambers<br> claim<br> circumstantial evidence<br> complainant<br> complaint<br> confess<br> confession<br> constitution<br> constitutional law<br> contract<br> continuance<br> counsel<br> court<br> crime<br> criminal<br> cross-examination<br> custody<br> damages<br> decree<br> defendant<br> defense<br> deposition<br> disbarment<br> discovery<br> docket<br> due process<br> entrapment<br> equity<br> escrow<br> estate<br> ethics<br> evidence<br> examination<br> exonerate<br> expunge<br> family law<br> felony<br> fiduciary<br> file<br> fraud<br> grand jury<br> grievance<br> guardian<br> guardianship<br> guilty<br> habeas corpus<br> hearing<br> hearsay<br> hung jury<br> immunity<br> incarceration<br> incompetent<br> indictment<br> infraction<br> injunction<br> innocent<br> instructions<br> jail<br> judge<br> judiciary<br> jurisdiction<br> jurisprudence<br> jury<br> justice<br> larceny<br> law<br> lawsuit<br> lawyer<br> legal<br> legislation<br> leniency<br> liable<br> lien<br> litigant<br> litigation<br> manslaughter<br> marshal<br> mediation<br> minor<br> misdemeanor<br> mistrial<br> moot<br> murder<br> negligence<br> oath<br> objection<br> opinion<br> order<br> ordinance<br> overrule<br> paralegal<br> pardon<br> parole<br> party<br> perjury<br> petition<br> plaintiff<br> plea<br> plea bargain<br> power of attorney<br> precedent<br> preliminary hearing<br> prison<br> probable cause<br> probate<br> probation<br> prosecute<br> prosecutor<br> proxy<br> reasonable doubt<br> rebut<br> record<br> re-direct<br> redress<br> rejoinder<br> resolution<br> reverse<br> revoke<br> robbery<br> rules<br> search warrant<br> self-defense<br> sentence<br> sequester<br> settlement<br> sheriff<br> sidebar<br> standing<br> state<br> statute<br> stay<br> subpoena<br> summary judgment<br> suit<br> suppress<br> sustain<br> testimony<br> theft<br> title<br> tort<br> transcript<br> trial<br> trust<br> trustee<br> usury<br> vacate<br> venue<br> verdict<br> voir dire<br> waiver<br> warrant<br> will<br> witness<br> writ<br> zoning<br>".split('<br> ')
		};

		return output;
	}
};