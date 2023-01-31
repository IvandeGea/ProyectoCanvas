window.onload = () => {

    class Player {
        constructor() {
            this.x = 100;
            this.y = 360;
            this.w = 75;
            this.h = 75;
            this.vel = 0;
            this.gravity = 2;
            this.jumping = false;

            this.imgPlayer = document.createElement("img");
            this.imgPlayer.src = "images/dino.png"

        }
        print(ctx) {

            ctx.drawImage(this.imgPlayer, this.x, this.y, this.w, this.h);
        }
        jump() {
            if (!this.jumping) {
                this.vel = -20;
                this.jumping = true;
            }

            if (this.y >= 435) {
                this.y = 435;
                this.vel = 0
                this.jumping = false;
            }
        }
    }



    class Fondo {
        constructor() {
            this.x = 0;
            this.y = 0;
            this.w = canvas.width;
            this.h = canvas.height;

            this.imgBack = document.createElement("img");
            this.imgBack.src = "images/background.jpg"
            this.vel = 2
        }
        print(ctx) {

            ctx.drawImage(this.imgBack, this.x, this.y, this.w, this.h);
            ctx.drawImage(this.imgBack, this.x + this.imgBack.width, 0)

            // ctx.drawImage(backgroundImage, backgroundX, 0);
            //   ctx.drawImage(backgroundImage, backgroundX + backgroundImage.width, 0);
        }
        move() {
            this.x -= this.vel;
            if (this.x <= -this.imgBack.width) {
                this.x = 0;
            }
        }
    }
    class Suelo {
        constructor() {
            this.x = canvas.width;
            this.y = 435;
            this.w = 70;
            this.h = 70;
            this.imgSuelo = document.createElement("img")
            this.imgSuelo.src = "images/suelo.png"
            this.vel = 1
        }
        print(ctx) {
            ctx.drawImage(this.imgSuelo, this.x, this.y, this.w, this.h);


        }
        move() {
            this.x -= this.vel
        }
    }


    class Obstaculo {
        constructor() {
            this.x = 750;
            this.y = 360;
            this.w = 75;
            this.h = 75;
            this.vel = 1;
            this.color = "red";
            this.imgObstaculo = document.createElement("img")
            this.imgObstaculo.src = "images/obstaculo1.png"
        }
        print(ctx) {
            ctx.drawImage(this.imgObstaculo, this.x, this.y, this.w, this.h);
        }
        move() {
            this.x -= this.vel
        }
    }

    class Juego {
        constructor() {

            this.canvas = document.getElementById("canvas");
            this.ctx = canvas.getContext("2d");
            this.player = new Player();
            this.obstaculos = [];
            this.suelos = [];
            this.fondo = new Fondo();
            this.score = 0;
            this.intervalId = undefined;
            this.iteracion = 0;

        }


        //   }
        //   
        start() {

            if (this.intervalId == undefined) {
                this.intervalId = setInterval(() => {
                    this.iteracion++;
                    //borra
                    this.clear();
                    //recalcula + genera obstaculos
                    this.recalculate();
                    //pinta
                    this.print();
                }, 20);
            }
        }
        stop() {
            if (this.intervalId) clearInterval(this.intervalId);
        }
        clear() {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        }
        print() {
            console.log(this.ctx);
            //fondo
            this.fondo.print(this.ctx);
            //Player
            this.player.print(this.ctx);
            //obst
            this.obstaculos.forEach(obstaculo => {
                obstaculo.print(this.ctx)
            });
            // suelo
            this.suelos.forEach(suelos => {
                suelos.print(this.ctx)
            });
        }
        recalculate() {
            if (this.iteracion % 200 == 0) {
                //creo obstaculo
                let obstaculo = new Obstaculo(this.canvas);
                //lo añado al array
                this.obstaculos.push(obstaculo);
                ;
            }

            if (this.iteracion % 70 == 0) {
                let suelo = new Suelo(this.canvas);
                this.suelos.push(suelo);

            }

            //recorro array obstaculos:
            this.obstaculos.forEach(obstaculo => {
                //cambio posiciones
                obstaculo.move();
                //controlo colisiones
                // if (!(this.coche.x + this.coche.w < obstaculo.x ||
                //     this.coche.x > obstaculo.x + obstaculo.w ||
                //     this.coche.y > obstaculo.y + obstaculo.h ||
                //     this.coche.y + this.coche.h < obstaculo.y)) {
                // //     this.stop();
                // }
            })
            this.suelos.forEach(suelo => {
                suelo.move()
            })

        }
    }

    let juego = new Juego();

    document.getElementById('start-button').onclick = () => {
        startGame();
    };

    function startGame() {
        juego.start();
    }

    // document.getElementByTagName("body")[0].addEventListener("keydown", function (event) {
    //     if (event.code === "Space" && !jumping) {
    //         juego.player.jump()
    //         juego.player.vel = - 25;
    //         juego.player.jumping = true;
    //     }
    // })


}




// // Variables para el control del personaje
// let x = 70;
// let y = -100;
// let vy = 0;
// let gravity = 2;
// let jumping = false;


// // Carga la imagen del personaje
// let playerImage = new Image();
// playerImage.src = "hola.gif";

// // Carga la imagen de fondo
// let backgroundImage = new Image();
// backgroundImage.src = "fondo.jpeg";

// let backgroundX = 0;
// let backgroundSpeed = 2;

// // Carga la imagen de suelo
// let floorImage = new Image();
// floorImage.src = "fondo block.png";

// let floorX = 0;
// let floorSpeed = 2;

// // Detecta si se ha pulsado la tecla de salto
// document.addEventListener("keydown", function(event) {
//   if (event.code === "Space" && !jumping) {
//     vy = -25;
//     jumping = true;
//   }
// });

// // Bucle de juego
// setInterval(function() {
//   // Actualiza la posición y velocidad del personaje
//   y += vy;
//   vy += gravity;

//

//   // Actualiza la posición de la imagen de fondo
//   backgroundX -= backgroundSpeed;
//   if (backgroundX <= -backgroundImage.width) {
//     backgroundX = 0;
//   }

//   // Dibuja el personaje y el fondo
//   let canvas = document.getElementById("gameCanvas");
//   let ctx = canvas.getContext("2d");
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   ctx.drawImage(backgroundImage, backgroundX, 0);
//   ctx.drawImage(backgroundImage, backgroundX + backgroundImage.width, 0);

//   ctx.drawImage(floorImage, floorX, 277);
//   ctx.drawImage(floorImage, 612, 277);
//   ctx.drawImage(playerImage, x, y, 75, 50);


//   // Dibuja el suelo
//   ctx.fillRect(0, 500, 500, 5);
// }, 20);









