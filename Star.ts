namespace Abschlussarbeit{

    export class Star extends Symbols{
        public spikes: number = 5;
        public outerRadius: number = 30;
        public innerRadius: number = 15;

        constructor(){
            super();
            this.position = new Vector(50,50);
            this.velocity = new Vector(5,20);
            this.color = "#FAC83C";
            this.height = 50;
            this.width = 50;
            this.draw();
            console.log("Star aufgerufen")
        }

        public draw = (): void => {
            var rot = Math.PI / 2 * 3;
            var x = this.position.x;
            var y = this.position.y;
            var step = Math.PI / this.spikes;
            crc2.beginPath();
            crc2.moveTo(this.position.x, this.position.y - this.outerRadius)
            for (let i = 0; i < this.spikes; i++) {
                x = this.position.x + Math.cos(rot) * this.outerRadius;
                y = this.position.y + Math.sin(rot) * this.outerRadius;
                crc2.lineTo(x, y)
                rot += step
                x = this.position.x + Math.cos(rot) * this.innerRadius;
                y = this.position.y + Math.sin(rot) * this.innerRadius;
                crc2.lineTo(x, y)
                rot += step
            }
            crc2.lineTo(this.position.x, this.position.y - this.outerRadius)
            crc2.closePath();
            crc2.fillStyle= this.color;
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
            if (yMousePosition > this.position.y - this.outerRadius && yMousePosition < this.position.y - this.outerRadius + this.height 
                && xMousePosition > this.position.x - this.outerRadius && xMousePosition < this.position.x - this.outerRadius + this.width) {
                console.log("Rectangle hit")
                this.collision = !this.collision;
            }else{
                console.log("no hit");
                this.collision = false;
            }
        }
    }
}