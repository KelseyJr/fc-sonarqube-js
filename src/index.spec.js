const { sum, subtract, times, division } = require('./index')

describe('sum', () => {
    it('should add two numbers', () => {
        // arrange
        const a = 10;
        const b = 5;
        const expectedResponse = 10 + 5;

        // act
        const response = sum(a, b);

        //assert
        expect(response).toBe(expectedResponse)
    })
})

describe('subtract', () => {
    it('should subtract two numbers', () => {
        // arrange
        const a = 10;
        const b = 5;
        const expectedResponse = 10 - 5;

        // act
        const response = subtract(a, b);

        //assert
        expect(response).toBe(expectedResponse)
    })
})

describe('times', () => {
    it('should multiply two numbers', () => {
        // arrange
        const a = 10;
        const b = 5;
        const expectedResponse = 10 * 5;

        // act
        const response = times(a, b);

        //assert
        expect(response).toBe(expectedResponse)
    })
})

describe('division', () => {
    it('should divide two numbers', () => {
        // arrange
        const a = 10;
        const b = 5;
        const expectedResponse = 10 / 5;

        // act
        const response = division(a, b);

        //assert
        expect(response).toBe(expectedResponse)
    })
})