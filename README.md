

![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)


# PokeRun


## Sobre nosotros
Somos Ivan y Lucas, dos alumnos del Bootcamp de Full Stack Development de **Ironhack Barcelona** y este es el primer proyecto combinando `CSS`, `HTML` y `JavaScript` que ambos hemos desarrollado.




## Deployment


Puedes jugar al juego [aquí](https://ivandegea.github.io/ProyectoCanvas/)


## Estructura de trabajo


Desarrollamos este proyecto usando [Trello](http://trello.com/home) para organizar nuestro flujo de trabajo.


## Sobre el juego


Eres Pikachu y vas corriendo sin parar hasta encontrarte con los brazos de Ash. Tienes que ir saltando a medida que se acercan otros Pokemones que intentan impedir que te encuentres con tu humano.


## Controles


Debes presionar la barra espaciadora para saltar.


## Condición de victoria


Llegar hasta donde se encuentra Ash.


## Condición de derrota


Colisión contra Pokemones.


## Clases


|   Class   | Properties                                                            | Methods                                          |
| :-------: | --------------------------------------------------------------------- | ------------------------------------------------ |
|   Player  | x, y, w, h, vel, imgPlayer                                            | print(ctx), jumping()                            |
| Obstaculo | x, y, w, h, vel, color                                                | print(ctx), move()                               |
|   Juego   | canvas, ctx, roadImg, coche, obstaculos, score, intervalId, iteracion | start(), stop(), clear(), print(), recalculate() |
|   Suelo   | x, y, w, h, vel, imgSuelo                                             | print(ctx), move()                               |
|   Fondo   | x, y, w, h, vel, imgFondo                                             | print(ctx), move()                               | 





