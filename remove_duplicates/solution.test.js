const removeDuplicates = require('./solution');

describe('removeDuplicates', () => {
    test('debería devolver un arreglo vacío cuando se le pasa un arreglo vacío', () => {
        expect(removeDuplicates([])).toEqual([]);
    });

    test('debería devolver el mismo arreglo cuando no hay duplicados', () => {
        expect(removeDuplicates([1, 2, 3])).toEqual([1, 2, 3]);
    });

    test('debería eliminar duplicados consecutivos', () => {
        expect(removeDuplicates([1, 1, 2, 2, 3, 3])).toEqual([1, 2, 3]);
    });

    test('debería eliminar duplicados no consecutivos', () => {
        expect(removeDuplicates([1, 2, 1, 3, 2, 4])).toEqual([1, 2, 3, 4]);
    });

    test('debería manejar arreglos con un solo elemento', () => {
        expect(removeDuplicates([5])).toEqual([5]);
    });

    test('debería manejar arreglos con todos los elementos iguales', () => {
        expect(removeDuplicates([7, 7, 7, 7])).toEqual([7]);
    });

    test('debería mantener el orden de la primera aparición', () => {
        expect(removeDuplicates([3, 1, 2, 1, 4, 3, 2])).toEqual([3, 1, 2, 4]);
    });
});
