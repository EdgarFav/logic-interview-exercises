const mergeSortedArrays = require('./solution');

describe('mergeSortedArrays', () => {
    test('mezcla correctamente dos arreglos ordenados', () => {
        expect(mergeSortedArrays([1, 3, 5], [2, 4, 6])).toEqual([1, 2, 3, 4, 5, 6]);
    });

    test('maneja un arreglo vacío como primer parámetro', () => {
        expect(mergeSortedArrays([], [1, 3, 5])).toEqual([1, 3, 5]);
    });

    test('maneja un arreglo vacío como segundo parámetro', () => {
        expect(mergeSortedArrays([1, 3, 5], [])).toEqual([1, 3, 5]);
    });

    test('maneja dos arreglos vacíos', () => {
        expect(mergeSortedArrays([], [])).toEqual([]);
    });

    test('maneja arreglos de diferentes longitudes', () => {
        expect(mergeSortedArrays([1, 2, 7, 8], [3, 4, 5, 6, 9, 10]))
            .toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    });

    test('maneja elementos repetidos', () => {
        expect(mergeSortedArrays([1, 2, 2, 3], [2, 3, 4, 4]))
            .toEqual([1, 2, 2, 2, 3, 3, 4, 4]);
    });
});
