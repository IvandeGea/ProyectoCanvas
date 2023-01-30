window.onload = () => {


    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "yellow";
    ctx.fillRect(50, 50, 100, 100);

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

            imgPlayer.onload = () => {
                ctx.drawImage(this.imgPlayer, this.x, this.y, this.w, this.h);
            }
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
        }
        print(ctx) {

            this.imgBack.onload = () => {
                ctx.drawImage(this.imgBack, this.x, this.y, this.w, this.h);
            }

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

            this.player = new Player();
            this.obstaculos = new Obstaculo();
            this.score = 0;
            this.intervalId = undefined;
            this.iteracion = 0;
            this.fondo = new Fondo();
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
            this.ctx.drawImage(this.roadImg, 0, 0, this.canvas.width, this.canvas.height);
            //coche
            this.coche.print(this.ctx);
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
            //controlo colisiones
            // if (!(this.coche.x + this.coche.w < obstaculo.x ||
            //     this.coche.x > obstaculo.x + obstaculo.w ||
            //     this.coche.y > obstaculo.y + obstaculo.h ||
            //     this.coche.y + this.coche.h < obstaculo.y)) {
            //     this.stop();
        }

        // }
    }

    // let juego = new Juego();

    // document.getElementById('start-button').onclick = () => {
    //     startGame();
    // };

    // function startGame() {
    //     juego.start();
    // }

    // document.body.addEventListener()
    // document.getElementsByTagName("body")[0].addEventListener("keydown", (event) => {
    //     switch (event.key) {
    //         case "ArrowLeft":
    //             juego.coche.moveIzq();
    //             break;
    //         case "ArrowRight":
    //             juego.coche.moveDer();
    //             break;
    // }
    // });
};


