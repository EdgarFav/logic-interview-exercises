/**
 * Rota un arreglo n posiciones a la derecha
 * @param {Array} arr - Arreglo a rotar
 * @param {number} n - Número de posiciones a rotar
 * @return {Array} Nuevo arreglo rotado
 */
function rotateRight(arr, n) {
    // Tu implementación aquí
    // arr es un arreglo a rotar, incluye cualquier valor
    // el arreglo puede estar vacio
    // si n es mayor al tamaño del arreglo, se calcula con modulo
    let result = []

    console.log("soy n: ", n)
    if (arr.length === 0 || n === 0) return arr

    if (n > arr.length) n = n % arr.length
    console.log("soy el nuevo valor de n", n)

    const divide = arr.length - n

    const sliceOne = arr.slice(0, divide)
    console.log("Soy el slice 1: ", sliceOne)

    const sliceTwo = arr.slice(divide, arr.at(-1))
    console.log("Soy el slice 2: ", sliceTwo)

    console.log("soy el array original: ", arr)

    result = [...sliceTwo, ...sliceOne]
    console.log("soy result: ", result)

    return result
}

module.exports = rotateRight;
