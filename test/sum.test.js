const sum = require('../src/sum.js')

it ('Should return correct sum', () => {
	const result = sum(2, 5)
	expect(result).toBe(7)
})

