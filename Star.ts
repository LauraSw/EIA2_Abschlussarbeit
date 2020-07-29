namespace Abschlussarbeit{

    export class Star extends Symbols{
        public spikes: number = 5;
        public outerRadius: number = 30;
        public innerRadius: number = 15;

        constructor(){
            super();
            this.xPosition = 75;
            this.yPosition = 100;
            this.draw();
            console.log("Star aufgerufen")
        }

        draw() {
            var rot = Math.PI / 2 * 3;
            var x = this.xPosition;
            var y = this.yPosition;
            var step = Math.PI / this.spikes;
        
            crc2.strokeStyle = "#000";
            crc2.beginPath();
            crc2.moveTo(this.xPosition, this.yPosition - this.outerRadius)
            for (let i = 0; i < this.spikes; i++) {
                x = this.xPosition + Math.cos(rot) * this.outerRadius;
                y = this.yPosition + Math.sin(rot) * this.outerRadius;
                crc2.lineTo(x, y)
                rot += step
                x = this.xPosition + Math.cos(rot) * this.innerRadius;
                y = this.yPosition + Math.sin(rot) * this.innerRadius;
                crc2.lineTo(x, y)
                rot += step
            }
            crc2.lineTo(this.xPosition, this.yPosition - this.outerRadius)
            crc2.closePath();
            crc2.fillStyle='yellow';
            crc2.fill();
        }

        public rotate():void{
            crc2.rotate(Math.PI / 200);
        }
    }
}