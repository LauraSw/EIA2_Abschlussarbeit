namespace Abschlussarbeit{

    export class Rectangle extends Symbols{


        constructor(){
            super();
            this.color = "#00ff00";
            this.width = 20;
            this.height = 80;
            this.xPosition = 20;
            this.yPosition = 20;
            this.draw();
        }

        public draw = (): void => {
            crc2.beginPath();
            crc2.rect(this.xPosition, this.yPosition, this.width, this.height);
            crc2.fillStyle = this.color;
            crc2.fill();
        }

        public updatePosition = (): void =>{
            //- Ändert den neuen x,y Wert auf die Mouse Position ab -//
            this.xPosition = xMousePosition;
            this.yPosition = yMousePosition;
            this.collision = false;
            canvasObject.drawCanvas();
        }

        public collisionDetection = () =>{
            //- Prüft, ob Element mit Mouse berührt wurde -//
            console.log("-------------")
            console.log("Mouse(x,y): "+xMousePosition+", "+yMousePosition);
            console.log("Object(x,y): "+this.xPosition +", "+this.yPosition+ " Object (hight/width): "+(this.xPosition+this.width)+", "+(this.yPosition+this.height));
            console.log("-------------")
            if (yMousePosition > this.xPosition && yMousePosition < this.yPosition + this.height 
                && xMousePosition > this.xPosition && xMousePosition < this.yPosition + this.width) {
                console.log("hit")
                isSymbolHit = true;
                this.collision = true;
            }else{
                console.log("no hit");
                this.collision = false;
            }
        }

        public animate = () =>{

        }
    }
}