/**
 * Realiza búsqueda binaria en un arreglo ordenado
 * @param {number[]} arr - Arreglo ordenado de números enteros
 * @param {number} target - Valor a buscar
 * @return {number} Índice del valor objetivo o -1 si no se encuentra
 */
function binarySearch(arr, target) {
    // Tu implementación aquí
    let result = 0

    if (!arr.includes(target)) result = -1

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            result = i
            console.log(`soy result ${result}`)
        }
    }

    return result;
}

module.exports = binarySearch;
