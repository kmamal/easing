
const easeInCirc = (x) => 1 - Math.sqrt(1 - x ** 2)
const easeOutCirc = (x) => Math.sqrt(1 - (x - 1) ** 2)
const easeInOutCirc = (x) => x < 0.5
	? (1 - Math.sqrt(1 - (2 * x) ** 2)) / 2
	: (Math.sqrt(1 - (-2 * x + 2) ** 2) + 1) / 2

module.exports = {
	easeInCirc,
	easeOutCirc,
	easeInOutCirc,
}
