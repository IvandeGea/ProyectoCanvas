window.onload = () => {

    class Player {
        constructor() {
            this.x = 100;
            this.y = -50;
            this.w = 75;
            this.h = 50;
            this.vel = 0;
            this.gravity = 1.3;
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
            this.vel = 7
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
            this.x = 720;
            this.y = 390;
            this.w = 60;
            this.h = 50;
            this.vel = 7;
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
    class ObstaculoGrande {
        constructor() {
            this.x = 720;
            this.y = 360;
            this.w = 90;
            this.h = 85;
            this.vel = 7;
            this.imgObstaculo = document.createElement("img")
            this.imgObstaculo.src = "images/Obstaculo.png"
        }
        print(ctx) {
            ctx.drawImage(this.imgObstaculo, this.x, this.y, this.w, this.h);
        }
        move() {
            this.x -= this.vel
        }
    }

    class Zubat {
        constructor() {
            this.x = 720;
            this.y = 230;
            this.w = 50;
            this.h = 50;
            this.vel = 10;
            this.imgObstaculo = document.createElement("img");
            this.imgObstaculo.src = "images/zubat.png";
        }

        print(ctx) {
            ctx.drawImage(this.imgObstaculo, this.x, this.y, this.w, this.h)
        }
        move() {
            this.x -= this.vel
        }
    }
    class Ash {
        constructor() {
            this.x = 720;
            this.y = 280;
            this.w = 80;
            this.h = 150;
            this.vel = 10;
            this.imgAsh = document.createElement("img");
            this.imgAsh.src = "images/ash.png";
        }

        print(ctx) {
            ctx.drawImage(this.imgAsh, this.x, this.y, this.w, this.h)
        }
        move() {
            this.x -= this.vel
        }
    }

    class Score {
        constructor() {
            this.x = 600;
            this.y = 20;
            this.w = 120;
            this.h = 50;
            this.score = 0
        }
        updateScore() {

            this.score++;
        };

        print(ctx) {
            ctx.fillText(`SCORE: ${this.score}`, this.x, this.y, this.w, this.h);
        }
    }

    class Juego {
        constructor() {

            this.canvas = document.getElementById("canvas");
            this.ctx = canvas.getContext("2d");
            this.player = new Player();
            this.obstaculos1 = [];
            this.obstaculosGrandes = [];
            this.zubats = [];
            this.ash = [];
            this.suelo = new Suelo();
            this.fondo = new Fondo();
            this.score = new Score();
            this.intervalId = undefined;
            this.iteracion = 0;

        }

        //   }
        //   
        start() {
            this.player = new Player();
            this.obstaculos1 = [];
            this.obstaculosGrandes = [];
            this.zubats = [];
            this.ash = [];
            this.suelo = new Suelo();
            this.fondo = new Fondo();
            this.score = new Score();
            this.intervalId = undefined;
            this.iteracion = 0;

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

            document.getElementById("game-board").style.display = "none";
            document.getElementById("game-over").style.display = "block";

        }

        win() { 
            if (this.intervalId) clearInterval(this.intervalId);

            document.getElementById("game-board").style.display = "none";
            document.getElementById("game-win").style.display = "block";
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
            this.obstaculos1.forEach(obstaculo => {
                obstaculo.print(this.ctx)
            });
            //Obst 2
            this.obstaculosGrandes.forEach(obstaculo => {
                obstaculo.print(this.ctx)
            });
            this.zubats.forEach(zubat => {
                zubat.print(this.ctx)
            });
            //Score
            this.score.print(this.ctx)

            //Ash 

            this.ash.forEach(ash => {
                ash.print(this.ctx)
            });


        }

        recalculate() {

            if (this.iteracion % 20 == 0) {
                this.score.updateScore()
            }
            if (this.iteracion % 110 == 0) {
                //creo obstaculo
                let obstaculo = new Obstaculo(this.canvas);
                //lo añado al array
                this.obstaculos1.push(obstaculo);
                ;
            }

            if (this.iteracion % 368 == 0) {
                //creo obstaculo
                let obstaculoGrande = new ObstaculoGrande(this.canvas);
                //lo añado al array
                this.obstaculosGrandes.push(obstaculoGrande);
                ;
            }

            if (this.iteracion % 185 == 0) {

                //creo obstaculo
                let zubat = new Zubat(this.canvas);
                //lo añado al array
                this.zubats.push(zubat);
            }

            if (this.iteracion % 1200 == 0) {

                let ash = new Ash(this.canvas);

                this.ash.push(ash)
            }


            this.suelo.x -= this.suelo.vel;
            if (this.suelo.x <= -this.suelo.w) {
                this.suelo.x = 0;
            }

            this.fondo.x -= this.fondo.vel;
            if (this.fondo.x <= -this.fondo.w) {
                this.fondo.x = 0;
            }

            //recorro array obstaculos1:
            this.obstaculos1.forEach(obstaculo => {
                //cambio posiciones
                obstaculo.move();
                if (!(this.player.x + this.player.w - 20 < obstaculo.x ||
                    this.player.x > obstaculo.x + obstaculo.w - 50 ||
                    this.player.y > obstaculo.y + obstaculo.h ||
                    this.player.y + this.player.h < obstaculo.y)) {
                    this.stop();
                }
            })

            this.obstaculosGrandes.forEach(obstaculo => {
                //cambio posiciones
                obstaculo.move();
                if (!(this.player.x + this.player.w - 30 < obstaculo.x ||
                    this.player.x > obstaculo.x + obstaculo.w - 50 ||
                    this.player.y > obstaculo.y + obstaculo.h ||
                    this.player.y + this.player.h < obstaculo.y)) {
                    this.stop();
                }

            })

            //recorro array :
            this.zubats.forEach(zubat => {
                //cambio posiciones
                zubat.move();
                if (!(this.player.x + this.player.w - 20 < zubat.x ||
                    this.player.x > zubat.x + zubat.w ||
                    this.player.y > zubat.y + zubat.h
                )) {
                    this.stop();
                }
            });

            this.ash.forEach(obstaculo => {
                //cambio posiciones
                obstaculo.move();
                if (!(this.player.x + this.player.w - 20 < obstaculo.x ||
                    this.player.x > obstaculo.x + obstaculo.w - 10 ||
                    this.player.y > obstaculo.y + obstaculo.h ||
                    this.player.y + this.player.h < obstaculo.y)) {
                    this.win();
                }

            });


            this.player.y += this.player.vel;
            this.player.vel += this.player.gravity;
            if (this.player.y >= 380) {
                this.player.y = 380;
                this.player.vel = 0;
                this.player.jumping = false;

            };
        }

        reiniciar() {
            this.player = new Player();
            this.obstaculos = [];
            this.score = 0;
            this.iteracion = 0;
            juego.start();
        }

    }


    let juego = new Juego();
    let boton = document.getElementById("game-intro")
    let botongo = document.getElementById("game-over")
    let botonwin = document.getElementById("game-win")

    function startGame() {
        juego.start();
    }


    boton.addEventListener("click", () => {

        document.getElementById("game-intro").style.display = "none";
        document.getElementById("game-board").style.display = "block";
        console.log("entraaaaa")
        startGame();

    });


    //BARRA ESPACIADORA!!!

    document.addEventListener("keydown", function (event) {
        if (event.code === "Space" && !juego.player.jumping) {

            juego.player.jump()
        }
    });

    //BARRA ESPACIADORA!!!

    botongo.addEventListener("click", () => {

        document.getElementById("game-over").style.display = "none";
        document.getElementById("game-board").style.display = "block";
        console.log("entraaaaago")
        startGame();


    })

    botonwin.addEventListener("click", () => {

        document.getElementById("game-over").style.display = "none";
        document.getElementById("game-board").style.display = "block";
        console.log("entraaaaago")
        startGame();


    })


}