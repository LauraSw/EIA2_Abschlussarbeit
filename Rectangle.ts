namespace Abschlussarbeit{

    export class Rectangle extends Symbols{


        constructor(){
            super();
            this.position = new Vector(20,20);
            this.velocity = new Vector(10,10);
            console.log(this.velocity.x)
            this.color = "#00ff00";
            this.width = 20;
            this.height = 80;
            this.draw();
        }

        public draw = (): void => {
            crc2.beginPath();
            crc2.rect(this.position.x, this.position.y, this.width, this.height);
            crc2.fillStyle = this.color;
            crc2.fill();
        }

        public updatePosition = (): void =>{
            //- Ändert den neuen x,y Wert auf die Mouse Position ab -//
            this.position.x = xMousePosition;
            this.position.y = yMousePosition;
            this.collision = false;
            canvasObject.drawCanvas();
        }

        public collisionDetection = () =>{
            //- Prüft, ob Element mit Mouse berührt wurde -//
            console.log("-------------");
            console.log("Mouse(x,y): "+xMousePosition+", "+yMousePosition);
            console.log("Object(x,y): "+this.xPosition +", "+this.yPosition+ " Object (height/width): "+(this.xPosition+this.width)+", "+(this.yPosition+this.height));
            console.log("-------------");
            console.log("yMousePosition: "+yMousePosition+", this.yPosition: "+this.yPosition);
            if (yMousePosition > this.position.y  && yMousePosition < this.position.y + this.height 
                && xMousePosition > this.position.x && xMousePosition < this.position.x + this.width) {
                console.log("Rectangle hit")
                this.collision = !this.collision;
            }else{
                console.log("no hit");
                this.collision = false;
            }
        }
    }
}