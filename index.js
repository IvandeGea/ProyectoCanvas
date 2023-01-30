window.onload = () => {

    const canvas = document.getElementById("canvas")
    const ctx = canvas.getContext("2d");

    class Player {
        constructor() {
            this.x = 100;
            this.y = 100;
            this.w = 50;
            this.h = 90;
            this.vel = 0;
            this.gravity = 2;
            this.imgPlayer = new Image();
            this.imgPlayer.src = "images/ironhack.png";
        }
        print(ctx) {
            ctx.drawImage(this.imgPlayer, this.x, this.y, this.w, this.h);
        }
        jump() {


        }
        moveDown() {
            ;

        }
    }
    class Fondo {

    }

    class Obstaculo1 { }

    class ObstaculoBloque { }

    class Juego {
        constructor() {
            this.canvas = document.getElementById("canvas");
            this.ctx = this.canvas.getContext("2d");
            this.fondoImg = document.createElement("img");
            this.fondoImg.src = "images/background.jpg";
            this.player = new Player();
            // this.obstaculo = new Obstaculo();
            this.obstaculos = [];
            this.score = 0;
            this.intervalId = undefined;
            this.iteracion = 0;
        }
        start() {
        }
    }

}













            //         start() {
            //                 // if(!this.intervalId) {
            //                 if (this.intervalId == undefined) {
            //                   this.intervalId = setInterval(() => {
            //                     this.iteracion++;
            //                     //borra
            //                     this.clear();
            //                     //recalcula + genera obstaculos
            //                     this.recalculate();
            //                     //pinta
            //                     this.print();
            //                   }, 20);
            //                 }
            //               }
            //               stop() {
            //                 if (this.intervalId) clearInterval(this.intervalId);
            //               }
            //               clear() {
            //                 this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            //               }
            //               print() {
            //                 console.log(this.ctx);
            //                 //fondo
            //                 this.ctx.drawImage(this.roadImg, 0, 0, this.canvas.width, this.canvas.height);
            //                 //coche
            //                 this.coche.print(this.ctx);
            //                 //obst
            //                 this.obstaculos.forEach(obstaculo => {
            //                   obstaculo.print(this.ctx);
            //                 });
            //               }


            //         }
            //     }











