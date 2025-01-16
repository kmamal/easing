const Sdl = require('@kmamal/sdl')
const Canvas = require('canvas')

const Fs = require('node:fs')
const Path = require('node:path')

const rootDir = Path.resolve(__dirname, '..')
const srcDir = Path.join(rootDir, 'src')
const fileNames = Fs.readdirSync(srcDir)

const easings = fileNames.map((x) => require(Path.join(srcDir, x)))

const panelWidth = 160
const panelHeight = 125
const smallPadding = 10
const largePadding = 20

const numRows = Math.ceil(easings.length / 2) // Two columns

const width = 6 * panelWidth + 3 * largePadding + 4 * smallPadding
const height = numRows * panelHeight + (numRows + 1) * largePadding

const window = Sdl.video.createWindow({
	title: "Easing Functions",
	width,
	height,
})

const canvas = Canvas.createCanvas(width, height)
const ctx = canvas.getContext('2d')

window.on('expose', () => {
	ctx.fillStyle = '#202324'
	ctx.fillRect(0, 0, width, height)

	ctx.fillStyle = '#0d0e0e'
	ctx.strokeStyle = 'white'
	ctx.textAlign = 'center'
	ctx.textBaseline = 'middle'
	ctx.font = '12px mono'

	let x
	let y = largePadding

	for (let i = 0; i < easings.length; i++) {
		x = largePadding
		if (i === numRows) {
			y = largePadding
		}
		if (i >= numRows) {
			x += 3 * panelWidth + 2 * smallPadding + largePadding
		}

		for (const [ name, fn ] of Object.entries(easings[i])) {
			ctx.fillRect(x, y, panelWidth, panelHeight)

			const xRange = panelWidth - 2 * largePadding
			const xStart = x + largePadding
			const yRange = panelHeight - 3 * largePadding
			const yStart = y + largePadding + yRange

			ctx.beginPath()
			ctx.moveTo(xStart, yStart)
			for (let fx = 0; fx <= xRange; fx += 0.5) {
				const fy = fn(fx / xRange) * yRange
				ctx.lineTo(xStart + fx, yStart - fy)
			}
			ctx.stroke()

			ctx.save()
			ctx.fillStyle = 'white'
			ctx.fillText(name, x + panelWidth / 2, yStart + largePadding)
			ctx.restore()

			x += panelWidth + smallPadding
		}
		y += panelHeight + largePadding
	}

	const buffer = canvas.toBuffer('raw')
	window.render(width, height, width * 4, 'bgra32', buffer)
})
