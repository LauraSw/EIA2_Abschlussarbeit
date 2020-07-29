"use strict";
var Abschlussarbeit;
(function (Abschlussarbeit) {
    class Circle extends Abschlussarbeit.Symbols {
        constructor() {
            super();
            this.radius = 30;
            this.xPosition = this.radius * 1.5;
            this.yPosition = this.radius * 1.5;
            this.draw();
            console.log("Star aufgerufen");
        }
        draw() {
            Abschlussarbeit.crc2.beginPath();
            Abschlussarbeit.crc2.arc(this.xPosition, this.yPosition, this.radius, 0, 2 * Math.PI, false);
            Abschlussarbeit.crc2.fillStyle = 'red';
            Abschlussarbeit.crc2.fill();
        }
    }
    Abschlussarbeit.Circle = Circle;
})(Abschlussarbeit || (Abschlussarbeit = {}));
//# sourceMappingURL=Circle.js.map