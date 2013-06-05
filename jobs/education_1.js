// education_1.js
module.exports = {
	title: 'Education Words',
	full: 'education',
	language: 'english',
	type: 'D',
	topic: 'ED',
	url: 'http://www.enchantedlearning.com/wordlist/school.shtml',
	element: false,
	filter: [],
	clean: function() {

		var output = {
			type: "array",
			data: "answer<br> arithmetic<br> assignment<br> atlas<br> backpack<br> ballpoint pen<br> binder<br> blackboard<br> book<br> bookcase<br> bookmark<br> calculator<br> calendar<br> chalk<br> chalk board<br> class clown<br> classroom<br> clip board<br> colored pencils<br> compass<br> composition book<br> computer<br> construction paper<br> crayons<br> desk<br> dictionary<br> dividers<br> dry-erase board<br> easel<br> encyclopedia<br> english<br> eraser<br> exam<br> examination<br> experiment<br> file folder<br> flash cards<br> folder<br> gel pen<br> geography<br> globe<br> glossary<br> glue<br> gluestick<br> grades<br> gym<br> highlighter<br> history<br> hole punch<br> homework<br> ink<br> intelligent<br> keyboard<br> language<br> laptop<br> learn<br> lesson<br> library<br> looseleaf paper<br> lunch<br> lunch box<br> map<br> markers<br> math<br> mathematics<br> mechanical pencil<br> memo pad<br> memorize<br> mortar board<br> notebook<br> pad of paper<br> paper<br> paper clip<br> paper punch<br> paste<br> pen<br> pencil<br> pencil pouch<br> pencil sharpener<br> physical education<br> portfolio<br> poster paint<br> principal<br> printer<br> project<br> protractor<br> pupil<br> push pin<br> question<br> quiz<br> reading<br> recess<br> rubber bands<br> ruler<br> science<br> scissors<br> sharpener<br> smart<br> spiral notebook<br> stapler<br> staple remover<br> student<br> tape<br> teacher<br> test<br> thesaurus<br> think<br> thumb tack<br> vocabulary<br> watercolors<br> whiteboard<br> word problems<br> word processor<br> world map<br> writing<br> yardstick".split('<br> ')
		};

		return output;
	}
};