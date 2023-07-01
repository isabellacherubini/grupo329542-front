# grupo-329542-frontend

## Levantar el frontend
Para levantar el frontend, debes correr el siguiente comando en la terminal:
```yarn dev```
Cabe mencionar que como el frontend hace requests al backend, primero hay que iniciar el backend siguiendo su documentación correspondiente.

## src/config.js
Para conectar con el backend de forma local se debe cambiar la primera línea de este archivo por:
```const API_URL = "http://localhost:3000";```

## Detalles del frontend
- Para crear un nuevo usuario, hay que considerar que por validaciones del backend no se puede repetir ni el nombre de usuario ni el mail y la contraseña debe tener un número, una letra y un caracter especial.
- Antes de empezar a jugar, se deben conectar tres jugadores a la partida, es decir, un jugador debe crear la partida y otros dos se deben unir antes de apretar el botón tirar el dado.
- Para que aparezca el botón de tirar dado en tu turno, debes actualizar el tablero con el botón designado para esto.
- El tablero se puede demorar en aparecer después de hacer la jugada pero siempre va a aparecer.