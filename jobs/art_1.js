// art_1.js
module.exports = {
	title: 'Art Words',
	full: 'art',
	language: 'english',
	type: 'U',
	topic: 'AR',
	url: 'http://www.enchantedlearning.com/wordlist/art.shtml',
	element: false,
	filter: [],
	clean: function() {
	
		var output = {
			type: "array",
			data: "abstract<br> acrylic paint<br> airbrush<br> animation<br> architecture<br> art<br> art gallery<br> artist<br> artistic<br> artist's bridge<br> artwork<br> assemblage<br> bas-relief<br> batik<br> blending<br> bridge<br> brightness<br> brush<br> calligraphy<br> canvas<br> cartoon<br> carve<br> ceramics<br> casting<br> cave drawing<br> chalk<br> charcoal<br> chisel<br> clay<br> cloisonné<br> collage<br> color<br> colored pencils<br> color wheel<br> compass<br> composition<br> contrast<br> craft<br> crayon<br> create<br> creativity<br> critique<br> crosshatching<br> decorate<br> decorative<br> decoupage<br> depict<br> design<br> draw<br> drawing<br> easel<br> egg tempera<br> enamel<br> encaustic<br> engraving<br> erase<br> eraser<br> etching<br> exhibit<br> exhibition<br> film<br> form<br> frame<br> fresco<br> gallery<br> gesso<br> gilding<br> glass<br> glassblowing<br> glaze<br> gold leaf<br> gouache<br> graffiti<br> graphic design<br> graphite<br> hammer<br> hatching<br> high-relief<br> hue<br> illustrate<br> illustration<br> image<br> ink<br> installation<br> kiln<br> landscape<br> latex paint<br> line<br> liner brush<br> linseed oil<br> lithograph<br> lost wax method<br> low-relief<br> mahl stick<br> maquette<br> marble<br> marbling<br> marker<br> masterpiece<br> mechanical pencil<br> media<br> medium<br> mixed media<br> mosaic<br> mural<br> museum<br> objects d'art<br> oil paint<br> old master<br> op art<br> paint<br> paintbrush<br> painter<br> painting<br> paint roller<br> palette<br> palette knife<br> paper<br> pastel<br> pen<br> pencil<br> perspective<br> photo<br> photograph<br> pigment<br> porcelain<br> portfolio<br> portrait<br> portray<br> poster<br> pottery<br> pounce<br> primary color<br> print<br> printing<br> proportion<br> quill<br> quilt<br> quilting<br> realism<br> ruler<br> scale<br> screen printing<br> sculpt<br> sculptor<br> sculpture<br> seascape<br> secondary color<br> shade<br> silk screen<br> sketch<br> sketchbook<br> solvent<br> stained glass<br> stencil<br> still life<br> stippling<br> stone<br> stonecutting<br> style<br> tempera<br> template<br> textile arts<br> tole painting<br> tone<br> tools<br> trompe l'oeil<br> t-square<br> tube<br> turpentine<br> undertone<br> varnish<br> vellum<br> video<br> visual<br> watercolor<br> waterscape<br> wax<br> wheel<br> wood<br> wood carving<br> woodcut<br> woodcut print<br> wood engraving<br>".split('<br> ')
		};

		return output;
	}
};