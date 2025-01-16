
const easeInQuad = (x) => x ** 2
const easeOutQuad = (x) => 1 - (1 - x) ** 2
const easeInOutQuad = (x) => x < 0.5
	? 2 * x ** 2
	: 1 - (-2 * x + 2) ** 2 / 2

module.exports = {
	easeInQuad,
	easeOutQuad,
	easeInOutQuad,
}
