# Rotar Array hacia la Derecha

## Descripción

Implementa una función llamada `rotateRight` que tome un arreglo y un número entero `n`, y devuelva un nuevo arreglo rotado `n` posiciones hacia la derecha.

### Ejemplo 1:
```
Input: [1, 2, 3, 4, 5], 2
Output: [4, 5, 1, 2, 3]
```

### Ejemplo 2:
```
Input: [1, 2, 3, 4, 5], 7
Output: [4, 5, 1, 2, 3]
// Explicación: 7 rotaciones es equivalente a 2 rotaciones (7 % 5 = 2)
```

### Restricciones:
- La función debe manejar arreglos vacíos
- Si `n` es mayor que la longitud del arreglo, debe calcular el módulo
- No modificar el arreglo original
- La función debe funcionar con cualquier tipo de dato en el arreglo
- Complejidad temporal: O(n)
