const sum = (a, b) => a + b;

const subtract = (a, b) => a - b;

const times = (a, b) => a * b;

const division = (a, b) => {
    if (b === 0) {
        throw new Error('Cant divide number by 0')
    }
    return a / b;
}

module.exports = {
    sum,
    subtract,
    times,
    division
}