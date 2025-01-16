
const easeInSine = (x) => 1 - Math.cos((x * Math.PI) / 2)
const easeOutSine = (x) => Math.sin((x * Math.PI) / 2)
const easeInOutSine = (x) => -(Math.cos(Math.PI * x) - 1) / 2

module.exports = {
	easeInSine,
	easeOutSine,
	easeInOutSine,
}
