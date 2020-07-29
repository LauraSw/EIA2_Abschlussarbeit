namespace Abschlussarbeit{

    export class Rectangle extends Symbols{


        constructor(){
            super();
            this.width = 20;
            this.height = 80;
            this.xPosition = 20;
            this.yPosition = 20;
            console.log("Rectangle aufgerufen")
        }

        public draw(): void{
            crc2.beginPath();
            crc2.rect(this.xPosition, this.yPosition, this.width, this.height);
            crc2.fillStyle = 'red';
            crc2.fill();
        }

        public collisionDetection = (): boolean =>{
            if (yMousePosition > this.xPosition && yMousePosition < this.yPosition + this.height 
                && xMousePosition > this.xPosition && xMousePosition < this.yPosition + this.width) {
                this.collision = true;
                return this.collision;
            }else{
                this.collision = false;
                return this.collision;
            }
        }

        public updatePosition = () =>{
            this.xPosition = xMousePosition;
            this.yPosition = yMousePosition;
            crc2.beginPath();
            crc2.rect(this.xPosition, this.yPosition, this.width, this.height);
            crc2.fillStyle = 'green';
            crc2.fill();
        }
    }
}