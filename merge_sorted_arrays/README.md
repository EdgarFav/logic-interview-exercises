# Mezclar dos arreglos ordenados

## Descripción

Implementa una función llamada `mergeSortedArrays` que tome dos arreglos ordenados de números enteros y devuelva un nuevo arreglo que contenga todos los elementos de ambos arreglos, manteniendo el orden ascendente.

### Ejemplo 1:
```
Input: [1, 3, 5], [2, 4, 6]
Output: [1, 2, 3, 4, 5, 6]
```

### Ejemplo 2:
```
Input: [1, 2, 3], []
Output: [1, 2, 3]
```

### Restricciones:
- No uses el método `sort()`
- Mantén la complejidad temporal en O(n + m), donde n y m son las longitudes de los arreglos de entrada
- Los arreglos de entrada ya vienen ordenados de forma ascendente
- Maneja correctamente arreglos vacíos
