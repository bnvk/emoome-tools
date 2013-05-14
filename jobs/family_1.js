// art_1.js
module.exports = {
	title: 'Family Words',
	full: 'family',
	language: 'english',
	type: 'U',
	topic: 'FA',
	url: 'http://www.enchantedlearning.com/wordlist/family.shtml',
	element: false,
	filter: [],
	clean: function() {

		var output = {
			type: "array",
			data: "adoption<br> adoptive father<br> adoptive mother<br> ancestor<br> aunt<br> bachelor<br> birth mother<br> blood relative<br> bride<br> bridegroom<br> brother<br> brotherhood<br> brotherly<br> brother-in-law<br> care-giver<br> child<br> childhood<br> children<br> clan<br> close-knit<br> connection<br> cousin<br> dad<br> daddy<br> daughter<br> daughter-in-law<br> descendant<br> devoted<br> divorce<br> eligible<br> engaged<br> engagement<br> estranged<br> ex<br> ex husband<br> ex wife<br> extended family<br> faithful<br> family<br> family tree<br> father<br> father-in-law<br> fiancee<br> first born<br> first cousin<br> first cousin once removed<br> flesh and blood<br> folks<br> foster<br> foster child<br> foster father<br> foster mother<br> foster parent<br> fraternal<br> friend<br> foster child<br> foster parent<br> fraternal<br> fraternal twin<br> genealogy<br> grampa<br> gramps<br> grandchild<br> grandchildren<br> granddaughter<br> grandfather<br> grandma<br> grandmother<br> grandpa<br> grandparent<br> grandson<br> granny<br> great-granddaughter<br> great-grandfather<br> great-grandmother<br> great-grandparent<br> great-grandson<br> great-aunt<br> great-uncle<br> groom<br> grownup<br> half-brother<br> half-sister<br> heir<br> heiress<br> helpmate<br> hereditary<br> heritage<br> history<br> home<br> household<br> husband<br> identical twin<br> inherit<br> inheritance<br> infant<br> infancy<br> in-law<br> juvenile<br> kin<br> kindred<br> kinfolk<br> kinship<br> kith<br> lineage<br> love<br> loyalty<br> ma<br> maiden name<br> mama<br> marriage<br> mate<br> maternal<br> matriarch<br> matrimony<br> minor<br> Miss<br> mom<br> mommy<br> monogamy<br> mother<br> mother-in-law<br> Mr.<br> Mrs.<br> Ms.<br> nana<br> natal<br> nephew<br> nest<br> newlywed<br> niece<br> nuclear family<br> nuptial<br> nurture<br> offspring<br> orphan<br> pa<br> papa<br> parent<br> partner<br> paternal<br> patriarch<br> pop<br> posterity<br> progenitor<br> progeny<br> quadruplets<br> quads<br> quints<br> quintuplets<br> related<br> relations<br> relative<br> second cousin<br> senior<br> separation<br> sibling<br> single<br> sister<br> sisterhood<br> sister-in-law<br> sisterly<br> son<br> son-in-law<br> spouse<br> stepbrother<br> stepchild<br> stepchildren<br> stepdad<br> stepdaughter<br> stepfather<br> stepmom<br> stepmother<br> stepsister<br> stepson<br> support<br> surrogate mother<br> tribe<br> triplets<br> trust<br> trustworthy<br> twin brother<br> twin sister<br> twins<br> uncle<br> wed<br> wedding<br> wedlock<br> wife<br>".split('<br> ')
		};

		return output;
	}
};