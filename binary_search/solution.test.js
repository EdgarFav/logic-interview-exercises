const binarySearch = require('./solution');

describe('binarySearch', () => {
    test('devuelve el índice correcto cuando el elemento existe', () => {
        expect(binarySearch([1, 3, 5, 7, 9], 5)).toBe(2);
        expect(binarySearch([1, 3, 5, 7, 9], 1)).toBe(0);
        expect(binarySearch([1, 3, 5, 7, 9], 9)).toBe(4);
    });

    test('devuelve -1 cuando el elemento no existe', () => {
        expect(binarySearch([1, 3, 5, 7, 9], 6)).toBe(-1);
        expect(binarySearch([1, 3, 5, 7, 9], 0)).toBe(-1);
        expect(binarySearch([1, 3, 5, 7, 9], 10)).toBe(-1);
    });

    test('maneja arreglos vacíos', () => {
        expect(binarySearch([], 5)).toBe(-1);
    });

    test('funciona con un solo elemento', () => {
        expect(binarySearch([5], 5)).toBe(0);
        expect(binarySearch([5], 2)).toBe(-1);
    });

    test('funciona con dos elementos', () => {
        expect(binarySearch([1, 2], 1)).toBe(0);
        expect(binarySearch([1, 2], 2)).toBe(1);
        expect(binarySearch([1, 2], 3)).toBe(-1);
    });
});
