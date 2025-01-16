
const C1 = 1.70158
const C2 = C1 * 1.525
const C3 = C1 + 1

const easeInBack = (x) => C3 * x ** 3 - C1 * x ** 2
const easeOutBack = (x) => 1 + C3 * (x - 1) ** 3 + C1 * (x - 1) ** 2
const easeInOutBack = (x) => x < 0.5
	? ((2 * x) ** 2 * ((C2 + 1) * 2 * x - C2)) / 2
	: ((2 * x - 2) ** 2 * ((C2 + 1) * (x * 2 - 2) + C2) + 2) / 2

module.exports = {
	easeInBack,
	easeOutBack,
	easeInOutBack,
}
