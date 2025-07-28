/**
 * Remueve elementos duplicados de un arreglo de números enteros.
 * @param {number[]} nums - Arreglo de números enteros
 * @return {number[]} Nuevo arreglo sin elementos duplicados
 */
function removeDuplicates(nums) {
  // Tu implementación aquí
  // nums es un array de numeros repetidos secuenciales o al azar
  // comprobar si el elemento actual existe en el nuevo array
  const result = []

  for (let i = 0; i < nums.length; i++) {
    if (!result.includes(nums[i])) {
      result.push(nums[i])
    }
  }
  return result;
}
module.exports = removeDuplicates;

// Aciertos y fallos

// Al principio estaba haciendolo con indexOf y lastIndex pero no pude implementar la logica.
// Decidi pedir ayuda a la IA para los pasos a resolver sin codigo y me indico que podia hacerlo con includes
// y estaba mas sencillo hacerlo asi, asi pude visualizar el algoritmo a papel y lapiz mas facil, la logica era correcta
// pero cometi un error al dejar el return dentro del bucle for y me retornaba solo la primera iteracion
// al revisar solo faltaba sacar el return fuera del for para que funcionara.