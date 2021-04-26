const mult = require('../src/mult')

it ('Should return correct multiply', () => {
	const result = mult(5, 5)
	expect(result).toBe(25)
})
