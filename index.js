window.onload = () => {

    class Player {
        constructor() {
            this.x = 100;
            this.y = -50;
            this.w = 75;
            this.h = 50;
            this.vel = 0;
            this.gravity = 1;
            this.jumping = false;

            this.imgPlayer = document.createElement("img");
            this.imgPlayer.src = "images/pika.gif"

        }
        print(ctx) {

            ctx.drawImage(this.imgPlayer, this.x, this.y, this.w, this.h);
        }

        jump() {
            this.vel = -20;
            this.jumping = true;
        }
    }



    class Fondo {
        constructor() {
            this.x = 0;
            this.y = 0;
            this.w = canvas.width;
            this.h = canvas.height;
            this.vel = 0.25;
            this.imgBack = document.createElement("img");
            this.imgBack.src = "images/fondo.jpg"


        }
        print(ctx) {

            ctx.drawImage(this.imgBack, this.x, this.y, this.w, this.h);
            ctx.drawImage(this.imgBack, this.x + this.w, this.y, this.w, this.h)

        }
        move() {
            this.x -= this.vel;
            if (this.x <= 0) {
                this.x = 0;
            }
        }
    }

    class Suelo {
        constructor() {
            this.x = 0;
            this.y = canvas.height - 100;
            this.w = canvas.width;
            this.h = 100;
            this.imgSuelo = document.createElement("img")
            this.imgSuelo.src = "images/suelo.png"
            this.vel = 5
        }
        print(ctx) {
            ctx.drawImage(this.imgSuelo, this.x, this.y, this.w, this.h);

            ctx.drawImage(this.imgSuelo, this.x + this.w, this.y, this.w, this.h)


        }
        move() {
            this.x -= this.vel
        }
    }

    class Obstaculo {
        constructor() {
            this.x = 700;
            this.y = 360;
            this.w = 25;
            this.h = 25;
            this.vel = 5;
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
            this.suelo = new Suelo();
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
            // console.log(this.ctx);
            //fondo
            this.fondo.print(this.ctx);
            // suelo
            this.suelo.print(this.ctx)
                ;
            //Player
            this.player.print(this.ctx);
            //obst
            this.obstaculos.forEach(obstaculo => {
                obstaculo.print(this.ctx)
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

            this.suelo.x -= this.suelo.vel;
            if (this.suelo.x <= -this.suelo.w) {
                this.suelo.x = 0;
            }

            this.fondo.x -= this.fondo.vel;
            if (this.fondo.x <= -this.fondo.w) {
                this.fondo.x = 0;
            }

            //recorro array obstaculos:
            this.obstaculos.forEach(obstaculo => {
                //cambio posiciones
                obstaculo.move();
                if (!(this.player.x + this.player.w < obstaculo.x ||
                    this.player.x > obstaculo.x + obstaculo.w ||
                    this.player.y > obstaculo.y + obstaculo.h ||
                    this.player.y + this.player.h < obstaculo.y)) {
                    this.stop();
                }


            })



            this.player.y += this.player.vel;
            this.player.vel += this.player.gravity;
            if (this.player.y >= 370) {
                this.player.y = 370;
                this.player.vel = 0;
                this.player.jumping = false;

            };
        }
    }


    let juego = new Juego();
    let boton = document.getElementById("game-intro")

    boton.addEventListener ("click", () => {
        
        document.getElementById("game-intro").style.display = "none";
        document.getElementById("game-board").style.display = "block";
        console.log("entraaaaa")
        startGame();



    });

    function startGame() {
        juego.start();
    }

    //BARRA ESPACIADORA!!!

    document.addEventListener("keydown", function (event) {
        if (event.code === "Space" && !juego.player.jumping) {

            juego.player.jump()
        }
    });

    //BARRA ESPACIADORA!!!

}