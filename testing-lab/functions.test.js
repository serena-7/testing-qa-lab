const {returnTwo, greeting, add, subtract, multiply, divide} = require("./functions.js");


test('returnTwo should return value of 2', () => {
    expect(returnTwo()).toBe(2);
})


test('greeting should return Hello, name.', () => {
    expect(greeting('James')).toBe('Hello, James.');
    expect(greeting('Jill')).toBe('Hello, Jill.');
})

describe('Math Functions:', () => {
    test('add should return sum of both numbers', () => {
        expect(add(1,2)).toBe(3);
        expect(add(5,9)).toBe(14);
    })
    test('subtract should be the difference of both numbers', () => {
        expect(subtract(5,3)).toBe(2);
        expect(subtract(12,1)).toBe(11);
    })
    test('multiply should be the product of both numbers', () => {
        expect(multiply(4,3)).toBe(12);
        expect(multiply(5,6)).toBe(30);
    })
    test('divide should be the quotient of both numbers', () => {
        expect(divide(6,2)).toBe(3);
        expect(divide(15,3)).toBe(5);
    })
})