window.onload = () => {

    class Player {
        constructor() {
            this.x = 100;
            this.y = 100;
            this.w = 500;
            this.h = 300;
            this.vel = 0;
            this.gravity = 0;

            this.imgPlayer = document.createElement("img");
            this.imgPlayer.src = "Images/dino.png"

        }
        print(ctx) {


            ctx.drawImage(this.imgPlayer, this.x, this.y, this.w, this.h);

        }
        jump() { }
    }

    class Fondo {
        constructor() {
            this.x = 0;
            this.y = 0;
            this.w = canvas.width;
            this.h = canvas.height;
            this.imgBack = document.createElement("img");
            this.imgBack.src = "Images/background.jpg"
            this.vel = 2
        }
        print(ctx) {

            ctx.drawImage(this.imgBack, this.x, this.y, this.w, this.h);


        }
    }
    class Suelo {
        constructor() {
            this.x = 0;
            this.y = 50;
            this.w = canvas.width;
            this.h = 50;
            this.imgSuelo = document.createElement("img")
            this.imgSuelo = "Image/suelo.png"
            this.vel = 10
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
            this.y = 0;
            this.w = 50;
            this.h = 50;
            this.vel = 10;
            this.color = "red";
        }
        print(ctx) {
            ctx.fillStyle = this.color;
            ctx.fillRect(this.x, this.y, this.w, this.h);
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
            this.obstaculo = new Obstaculo();
            this.suelo = new Suelo()
            this.fondo = new Fondo();
            this.score = 0;
            this.intervalId = undefined;
            this.iteracion = 0;

        }
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
            this.ctx.drawImage(this.suelo, 0, 0, this.canvas.width, this.canvas.height);
            //coche
            this.player.print(this.ctx);
            //obst
            this.obstaculo.print(this.ctx);
        }
        recalculate() {
            if (this.iteracion == 70) {
                //creo obstaculo
                let obstaculo = new Obstaculo(this.canvas);
            }

            //     //cambio posiciones
            this.obstaculo.move();
            // controlo colisiones
            if (!(this.player.x + this.player.w < obstaculo.x ||
                this.player.x > player.x + player.w ||
                this.player.y > obstaculo.y + obstaculo.h ||
                this.player.y + this.coche.h < obstaculo.y)) {
                this.stop();
            }




        }

    }

    let juego = new Juego();

    document.getElementById('start-button').onclick = () => {
        startGame();
    };

    function startGame() {
        juego.start();
    }


}

