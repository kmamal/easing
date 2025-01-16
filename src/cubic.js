
const easeInCubic = (x) => x ** 3
const easeOutCubic = (x) => 1 - (1 - x) ** 3
const easeInOutCubic = (x) => x < 0.5
	? 4 * x ** 3
	: 1 - (-2 * x + 2) ** 3 / 2

module.exports = {
	easeInCubic,
	easeOutCubic,
	easeInOutCubic,
}
