
const easeInQuint = (x) => x ** 5
const easeOutQuint = (x) => 1 - (1 - x) ** 5
const easeInOutQuint = (x) => x < 0.5
	? 16 * x ** 5
	: 1 - (-2 * x + 2) ** 5 / 2

module.exports = {
	easeInQuint,
	easeOutQuint,
	easeInOutQuint,
}
