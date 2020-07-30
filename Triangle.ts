namespace Abschlussarbeit{

    export class Triangle extends Symbols{
        radius: number = 20;

        constructor(){
            super();
            this.position = new Vector(50,20);
            this.velocity = new Vector(20,40);
            this.color = "#FFCC00";
            this.width = 60;
            this.height = 60;
            this.draw();
        }

        public draw = (): void => {
            crc2.moveTo(this.position.x, this.position.y);
            crc2.lineTo(this.position.x - (this.width/2), this.position.y + this.height);
            crc2.lineTo(this.position.x + (this.width/2), this.position.y + this.height);
            crc2.closePath();
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
                && xMousePosition > this.position.x - (this.width/2) && xMousePosition < this.position.x + (this.width/2)) {
                console.log("Rectangle hit")
                this.collision = !this.collision;
            }else{
                console.log("no hit");
                this.collision = false;
            }
        }
    }
}