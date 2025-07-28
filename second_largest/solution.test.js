const findSecondLargest = require('./solution');

describe('findSecondLargest', () => {
    test('debería devolver el segundo número más grande', () => {
        expect(findSecondLargest([5, 1, 4, 2, 8])).toBe(5);
    });

    test('debería manejar arreglos con elementos repetidos', () => {
        expect(findSecondLargest([10, 10, 10, 9])).toBe(9);
    });

    test('debería devolver undefined para arreglos con menos de 2 elementos', () => {
        expect(findSecondLargest([1])).toBeUndefined();
        expect(findSecondLargest([])).toBeUndefined();
    });

    test('debería manejar números negativos', () => {
        expect(findSecondLargest([-1, -2, -3, -4])).toBe(-2);
    });

    test('debería manejar arreglos con todos los elementos iguales', () => {
        expect(findSecondLargest([7, 7, 7, 7])).toBeUndefined();
    });
});
