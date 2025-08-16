# Binary Search en Array Ordenado

## Descripción

Implementa una función llamada `binarySearch` que reciba un arreglo de números enteros ordenado de forma ascendente y un valor objetivo (`target`). La función debe devolver el índice donde se encuentra el valor objetivo en el arreglo. Si el valor no existe, debe devolver -1.

### Ejemplo 1:
```
Input: [1, 3, 5, 7, 9], 5
Output: 2
```

### Ejemplo 2:
```
Input: [1, 3, 5, 7, 9], 6
Output: -1
```

### Restricciones:
- La función debe tener complejidad O(log n)
- No utilices métodos de búsqueda lineal como `indexOf` o `findIndex`
- El arreglo siempre estará ordenado de menor a mayor
- El arreglo puede estar vacío
