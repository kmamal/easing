
const easeInExpo = (x) => x === 0 ? 0 : 2 ** (10 * x - 10)
const easeOutExpo = (x) => x === 1 ? 1 : 1 - 2 ** (-10 * x)
const easeInOutExpo = (x) => x === 0 ? 0 : x === 1 ? 1
	: x < 0.5
		? 2 ** (20 * x - 10) / 2
		: (2 - 2 ** (-20 * x + 10)) / 2

module.exports = {
	easeInExpo,
	easeOutExpo,
	easeInOutExpo,
}
