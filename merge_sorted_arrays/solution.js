/**
 * Mezcla dos arreglos ordenados en uno solo manteniendo el orden
 * @param {number[]} arr1 - Primer arreglo ordenado
 * @param {number[]} arr2 - Segundo arreglo ordenado
 * @return {number[]} Nuevo arreglo con todos los elementos ordenados
 */
function mergeSortedArrays(arr1, arr2) {
    // Tu implementación aquí
    // Esta solucion se podria desarrollar con sort facilmente
    let result = []
    let i = 0
    let j = 0

    if (arr1.length === 0 && arr2.length === 0) return []
    if (arr1.length === 0) return arr2
    if (arr2.length === 0) return arr1

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            result.push(arr1[i])
            i++
        } else {
            result.push(arr2[j])
            j++
        }
    }

    while (i < arr1.length) {
        result.push(arr1[i])
        i++
    }

    while (j < arr2.length) {
        result.push(arr2[j])
        j++
    }

    // result = arr1.concat(arr2).sort((a, b) => a - b)
    // console.log("soy result: ", result)

    console.log(`Soy el arr1: ${arr1} 
                Soy arr2: ${arr2} 
                Soy result: ${result}`)
    return result;
}

module.exports = mergeSortedArrays;
