
const easeInQuart = (x) => x ** 4
const easeOutQuart = (x) => 1 - (1 - x) ** 4
const easeInOutQuart = (x) => x < 0.5
	? 8 * x ** 4
	: 1 - (-2 * x + 2) ** 4 / 2

module.exports = {
	easeInQuart,
	easeOutQuart,
	easeInOutQuart,
}
