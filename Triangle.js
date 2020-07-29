"use strict";
var Abschlussarbeit;
(function (Abschlussarbeit) {
    class Triangle extends Abschlussarbeit.Symbols {
        constructor() {
            super();
            this.radius = 20;
            this.draw();
            console.log("Star aufgerufen");
        }
        draw() {
            Abschlussarbeit.crc2.moveTo(50, 20);
            Abschlussarbeit.crc2.lineTo(20, 80);
            Abschlussarbeit.crc2.lineTo(80, 80);
            Abschlussarbeit.crc2.closePath();
            Abschlussarbeit.crc2.fillStyle = "#FFCC00";
            Abschlussarbeit.crc2.fill();
        }
    }
    Abschlussarbeit.Triangle = Triangle;
})(Abschlussarbeit || (Abschlussarbeit = {}));
//# sourceMappingURL=Triangle.js.map