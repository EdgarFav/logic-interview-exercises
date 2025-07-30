/**
 * Mezcla dos arreglos ordenados en uno solo manteniendo el orden
 * @param {number[]} arr1 - Primer arreglo ordenado
 * @param {number[]} arr2 - Segundo arreglo ordenado
 * @return {number[]} Nuevo arreglo con todos los elementos ordenados
 */
function mergeSortedArrays(arr1, arr2) {
    // Tu implementación aquí
    // Esta solucion esta hecha con sort
    let result = []

    if (arr1.length === 0 && arr2.length === 0) return []
    if (arr1.length === 0) return arr2
    if (arr2.length === 0) return arr1

    result = arr1.concat(arr2).sort((a, b) => a - b)

    return result;
}

module.exports = mergeSortedArrays;
