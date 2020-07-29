"use strict";
var Abschlussarbeit;
(function (Abschlussarbeit) {
    class Star extends Abschlussarbeit.Symbols {
        constructor() {
            super();
            this.spikes = 5;
            this.outerRadius = 30;
            this.innerRadius = 15;
            this.xPosition = 75;
            this.yPosition = 100;
            this.draw();
            console.log("Star aufgerufen");
        }
        draw() {
            var rot = Math.PI / 2 * 3;
            var x = this.xPosition;
            var y = this.yPosition;
            var step = Math.PI / this.spikes;
            Abschlussarbeit.crc2.strokeStyle = "#000";
            Abschlussarbeit.crc2.beginPath();
            Abschlussarbeit.crc2.moveTo(this.xPosition, this.yPosition - this.outerRadius);
            for (let i = 0; i < this.spikes; i++) {
                x = this.xPosition + Math.cos(rot) * this.outerRadius;
                y = this.yPosition + Math.sin(rot) * this.outerRadius;
                Abschlussarbeit.crc2.lineTo(x, y);
                rot += step;
                x = this.xPosition + Math.cos(rot) * this.innerRadius;
                y = this.yPosition + Math.sin(rot) * this.innerRadius;
                Abschlussarbeit.crc2.lineTo(x, y);
                rot += step;
            }
            Abschlussarbeit.crc2.lineTo(this.xPosition, this.yPosition - this.outerRadius);
            Abschlussarbeit.crc2.closePath();
            Abschlussarbeit.crc2.fillStyle = 'yellow';
            Abschlussarbeit.crc2.fill();
        }
        rotate() {
            Abschlussarbeit.crc2.rotate(Math.PI / 200);
        }
    }
    Abschlussarbeit.Star = Star;
})(Abschlussarbeit || (Abschlussarbeit = {}));
//# sourceMappingURL=Star.js.map