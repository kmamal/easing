
const N1 = 7.5625
const D1 = 2.75

const S1 = 1 / D1
const S2 = 2 / D1
const S3 = 1.5 / D1
const S4 = 2.5 / D1
const S5 = 2.25 / D1
const S6 = 2.625 / D1

const easeInBounce = (x) => 1 - easeOutBounce(1 - x)
const easeOutBounce = (x) => {
	if (x < S1) {
		return N1 * x ** 2
	} else if (x < S2) {
		return N1 * (x - S3) ** 2 + 0.75
	} else if (x < S4) {
		return N1 * (x - S5) ** 2 + 0.9375
	}
	return N1 * (x - S6) ** 2 + 0.984375
}
const easeInOutBounce = (x) => x < 0.5
	? (1 - easeOutBounce(1 - 2 * x)) / 2
	: (1 + easeOutBounce(2 * x - 1)) / 2

module.exports = {
	easeInBounce,
	easeOutBounce,
	easeInOutBounce,
}
