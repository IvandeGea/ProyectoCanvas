window.onload = () => {

    class Player {
        constructor() {
            this.x = 100;
            this.y = 360;
            this.w = 75;
            this.h = 50;
            this.vel = 0;
            this.gravity = 2;
            this.jumping = false;

            this.imgPlayer = document.createElement("img");
            this.imgPlayer.src = "images/pika.gif"

        }
        print(ctx) {

            ctx.drawImage(this.imgPlayer, this.x, this.y, this.w, this.h);
        }
        jump() { 
            this.vel = -25;
            this.jumping = true;
        }
    }

    class Fondo {
        constructor() {
            this.x = 0;
            this.y = 0;
            this.w = canvas.width;
            this.h = canvas.height;
            this.imgBack = document.createElement("img");
            this.imgBack.src = "images/fondo.jpeg"
            this.vel = 2
        }
        print(ctx) {

            ctx.drawImage(this.imgBack, this.x, this.y, this.w, this.h);


        }
    }
    class Suelo {
        constructor() {
            this.x = 0;
            this.y = 435;
            this.w = canvas.width;
            this.h = 70;
            this.imgSuelo = document.createElement("img")
            this.imgSuelo.src = "images/suelo.png"
            this.vel = 0
        }
        print(ctx) {
            10 * ctx.drawImage(this.imgSuelo, this.x, this.y, this.w, this.h);
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
            // console.log(this.ctx);
            //fondo
            this.fondo.print(this.ctx);
            //coche
            this.player.print(this.ctx);
            //obst
            this.obstaculo.print(this.ctx);
            // suelo
            this.suelo.print(this.ctx)
        }
        recalculate() {
            if (this.iteracion == 70) {
                //creo obstaculo
                let obstaculo = new Obstaculo(this.canvas);
            }

            //     //cambio posiciones
            this.obstaculo.move();

            this.player.y += this.player.vel;
            this.player.vel += this.player.gravity;
            if (this.player.y >= 360) {
              this.player.y = 360;
              this.player.vel = 0;
              this.player.jumping = false;
            }  
            // // controlo colisiones
            // if (!(this.player.x + this.player.w < obstaculo.x ||
            //     this.player.x > player.x + player.w ||
            //     this.player.y > obstaculo.y + obstaculo.h ||
            //     this.player.y + this.coche.h < obstaculo.y)) {
            //     this.stop();
        }


    }

    
    let juego = new Juego();
    
    document.getElementById('start-button').onclick = () => {
        startGame();
    };
    
    function startGame() {
        juego.start();
    }
    
    //BARRA ESPACIADORA!!!
    
    document.addEventListener("keydown", function(event) {
        if (event.code === "Space" && !juego.player.jumping) {

            juego.player.jump()
        }
      });
    
    //BARRA ESPACIADORA!!!
    
}

