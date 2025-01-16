
const C4 = (2 * Math.PI) / 3
const C5 = (2 * Math.PI) / 4.5

const easeInElastic = (x) => x === 0 ? 0 : x === 1 ? 1
	: -(2 ** (10 * x - 10)) * Math.sin((x * 10 - 10.75) * C4)
const easeOutElastic = (x) => x === 0 ? 0 : x === 1 ? 1
	: 2 ** (-10 * x) * Math.sin((x * 10 - 0.75) * C4) + 1
const easeInOutElastic = (x) => x === 0 ? 0 : x === 1 ? 1
	: x < 0.5
		? -(2 ** (20 * x - 10) * Math.sin((20 * x - 11.125) * C5)) / 2
		: (2 ** (-20 * x + 10) * Math.sin((20 * x - 11.125) * C5)) / 2 + 1

module.exports = {
	easeInElastic,
	easeOutElastic,
	easeInOutElastic,
}
