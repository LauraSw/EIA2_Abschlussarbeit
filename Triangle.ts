namespace Abschlussarbeit{

    export class Triangle extends Symbols{
        radius: number = 20;

        constructor(){
            super();
            this.draw();
            console.log("Star aufgerufen")
        }

        public draw(): void{
            crc2.moveTo(50, 20);
            crc2.lineTo(20, 80);
            crc2.lineTo(80, 80);
            crc2.closePath();
            crc2.fillStyle = "#FFCC00";
            crc2.fill();         
        }
    }
}