// sight_1.js
module.exports = {
	title: 'Sight Words',
	full: 'sight',
	language: 'english',
	type: 'I',
	topic: 'SG',
	url: 'http://www.enchantedlearning.com/wordlist/shapes.shtml',
	element: false,
	filter: [],
	clean: function() {
	
		var output = {
			type: "array",
			data: "acute triangle<br> annulus<br> arc<br> asymmetry<br> bipyramid<br> cardioid<br> circle<br> concave polygon<br> cone<br> convex polygon<br> crescent<br> cube<br> cuboid<br> curve<br> cylinder<br> decagon<br> disc<br> dodecahedron<br> dot<br> ellipse<br> ellipsoid<br> equilateral triangle<br> gnomon<br> heart<br> helix<br> heptagon<br> hexaflexagon<br> hexagon<br> hexagonal prism<br> hexahedron<br> hyperboloid<br> hypersphere<br> icosahedron<br> interval<br> isosceles triangle<br> kite<br> klein bottle<br> line<br> line segment<br> lozenge<br> möbius strip<br> nonagon<br> obtuse triangle<br> octagon<br> octahedron<br> orb<br> oval<br> paraboloid<br> parallelepiped<br> parallelogram<br> pentagon<br> plane<br> platonic solid<br> point<br> polygon<br> polyhedra<br> prism<br> pyramid<br> quadrilateral<br> ray<br> rectangle<br> regular polygon<br> regular polyhedra<br> rhombus<br> right triangle<br> round<br> scalene triangle<br> sector<br> semicircle<br> shape<br> shapeless<br> sphere<br> spheroid<br> square<br> star<br> symmetry<br> tetrahedron<br> tesseract<br> torus<br> trapezium<br> trapezoid<br> triangle<br> wedge".split('<br> ')
		};

		return output;
	}
};