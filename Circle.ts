namespace Abschlussarbeit{

    export class Circle extends Symbols{
        radius: number = 30;

        constructor(){
            super();
            this.xPosition = this.radius*1.5;
            this.yPosition = this.radius*1.5;
            this.draw();
            console.log("Star aufgerufen")
        }

        public draw(): void{
            crc2.beginPath();
            crc2.arc(this.xPosition, this.yPosition, this.radius, 0, 2 * Math.PI, false);
            crc2.fillStyle = 'red';
            crc2.fill();
        }
    }
}