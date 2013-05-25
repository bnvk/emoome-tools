// numbers_1.js
module.exports = {
	title: 'Numbers Words',
	full: 'numbers',
	language: 'english',
	type: 'U',
	topic: 'N',
	url: 'http://www.enchantedlearning.com/wordlist/math.shtml',
	element: false,
	filter: [],
	clean: function() {
	
		var output = {
			type: "array",
			data: "add<br> addend<br> addition<br> angle<br> answer<br> area<br> arithmetic<br> average<br> axis<br> billion<br> binary<br> calculate<br> cardinal<br> carry<br> circle<br> circumference<br> compass<br> cone<br> coordinates<br> cosine<br> counting<br> cube<br> curve<br> cylinder<br> decimal<br> degree<br> denominator<br> diameter<br> difference<br> divide<br> division<br> divisor<br> dozen<br> eight<br> eighteen<br> eighty<br> eleven<br> ellipse<br> equal<br> equation<br> equilateral<br> even<br> exponent<br> expression<br> factor<br> factorial<br> fifteen<br> fifty<br> five<br> focus<br> formula<br> forty<br> four<br> fourteen<br> fraction<br> geometry<br> graph<br> greater<br> greater than<br> half<br> hundred<br> hundredth<br> hyperbola<br> hypotenuse<br> identity<br> imaginary<br> inequality<br> integer<br> intersection<br> inverse<br> irrational number<br> isosceles<br> kilo-<br> less<br> less than<br> line<br> linear<br> long division<br> math<br> mathematician<br> mathematics<br> mean<br> median<br> million<br> minus<br> modular<br> multiplicand<br> multiply<br> nano<br> negative<br> nine<br> nineteen<br> ninety<br> null<br> number<br> number line<br> numeral<br> numerator<br> numerical<br> obtuse<br> octagon<br> odd<br> one<br> operation<br> orb<br> ordinal<br> origin<br> oval<br> parabola<br> parallel<br> parallelogram<br> percent<br> perimeter<br> perpendicular<br> pi<br> plane<br> plot<br> plus<br> point<br> polygon<br> polyhedron<br> polynomial<br> power<br> prime number<br> product<br> proof<br> protractor<br> pyramid<br> q.e.d.<br> quadratic<br> quadrilateral<br> quarter<br> quotient<br> radian<br> radius<br> rational number<br> ray<br> real number<br> rectangle<br> remainder<br> rhombus<br> right angle<br> rounded<br> scientific notation<br> series<br> set<br> seven<br> seventeen<br> seventy<br> sine<br> six<br> sixteen<br> sixty<br> skip counting<br> slope<br> solve<br> sphere<br> square<br> square root<br> subtract<br> subtrahend<br> sum<br> symbol<br> symmetry<br> tangent<br> ten<br> tenth<br> thirteen<br> thirty<br> thousand<br> thousandth<br> three<br> times<br> torus<br> trapezoid<br> triangle<br> trillion<br> twelve<br> twenty<br> two<br> union<br> unit<br> variable<br> venn diagram<br> vertex<br> volume<br> whole number<br> x-axis<br> x-coordinate<br> y-axis<br> y-coordinate<br> zero".split('<br> ')
		};

		return output;
	}
};