/**
 * Encuentra el segundo elemento más grande en un arreglo de números.
 * @param {number[]} arr - Arreglo de números enteros
 * @return {number} El segundo elemento más grande del arreglo
 */
function findSecondLargest(arr) {
    // Tu implementación aquí
    // arr es un arreglo con numeros, enteros o negativos e incluso un arreglo vacio
    // si el arreglo tiene menos de dos elementos es undefined
    // si todos los numeros son iguales es undefined
    // copiar el array, eliminar el valor mas grande y despues sacar el valor mas grande de ese nuevo array

    // 1.-Validar el tamaño del arreglo: Si el arreglo tiene menos de 2 elementos, retornar undefined.
    if (arr.length < 2) {
        return undefined
    }

    // 2.-Encontrar el valor máximo: Identificar el número más grande en el arreglo.
    const largest = Math.max(...arr)
    console.log("soy el numero mas grande: ", largest)

    // 3.-Filtrar el valor máximo: Crear un nuevo arreglo que excluya todas las ocurrencias del valor máximo
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === largest) {
            arr.splice(i, 1)
            i--
            console.log("soy el nuevo array ", arr)
        }
    }

    if (arr.length === 0) return undefined

    let secondLargest = Math.max(...arr)
    console.log("soy el segundo numero mas grande: ", secondLargest)

    return secondLargest;
}

module.exports = findSecondLargest;

// Aciertos y fallos

// Abstraer la idea fue algo complicado, no me fue dificil saber que debia encontrar primero el valor mas grande del array, despues busque su indice para borrarlo del array pero despues me di cuenta que eso no era necesario, tenia la idea de borrar las ocurrencias del valor maximo en el array con splice y un for pero no sabia como hacerlo ya que no me funcionaba, lo que hice fue buscar explicacion y encontre el detalle de los indices por lo que i-- me salvo la vida sabiendo que cada vez que borraba un valor los indices se recorrian, despues de borrar los valores maximo de cada array, utilice Mat.max() para sacar el nuevo valor maximo