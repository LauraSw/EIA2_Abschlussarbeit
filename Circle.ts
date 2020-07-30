namespace Abschlussarbeit{

    export class Circle extends Symbols{

        constructor(){
            super();
            this.radius = 40;
            this.position = new Vector(this.radius*1.5,this.radius*1.5);
            this.velocity = new Vector(20,0);
            this.color = "#ff0000";
            this.draw();
        }

        public draw = (): void => {
            crc2.beginPath();
            crc2.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI, false);
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
            if (yMousePosition > this.position.y - this.radius  && yMousePosition < this.position.y + this.radius 
                && xMousePosition > this.position.x - this.radius  && xMousePosition < this.position.x + this.radius ) {
                console.log("Rectangle hit")
                this.collision = !this.collision;
            }else{
                console.log("no hit");
                this.collision = false;
            }
        }
    }
}