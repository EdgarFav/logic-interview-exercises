const rotateRight = require('./solution');

describe('rotateRight', () => {
    test('rota correctamente un arreglo', () => {
        expect(rotateRight([1, 2, 3, 4, 5], 2)).toEqual([4, 5, 1, 2, 3]);
    });

    test('maneja rotaciones mayores que la longitud del arreglo', () => {
        expect(rotateRight([1, 2, 3, 4, 5], 7)).toEqual([4, 5, 1, 2, 3]);
    });

    test('devuelve el mismo arreglo cuando n es 0', () => {
        const arr = [1, 2, 3];
        expect(rotateRight(arr, 0)).toEqual([1, 2, 3]);
    });

    test('maneja arreglos vacíos', () => {
        expect(rotateRight([], 3)).toEqual([]);
    });

    test('no modifica el arreglo original', () => {
        const arr = [1, 2, 3];
        rotateRight(arr, 1);
        expect(arr).toEqual([1, 2, 3]);
    });

    test('funciona con diferentes tipos de datos', () => {
        const arr = ['a', 'b', 'c', { key: 'value' }];
        expect(rotateRight(arr, 1)).toEqual([{ key: 'value' }, 'a', 'b', 'c']);
    });
});
