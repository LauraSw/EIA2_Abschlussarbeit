"use strict";
var Abschlussarbeit;
(function (Abschlussarbeit) {
    class Rectangle extends Abschlussarbeit.Symbols {
        constructor() {
            super();
            this.collisionDetection = () => {
                if (Abschlussarbeit.yMousePosition > this.xPosition && Abschlussarbeit.yMousePosition < this.yPosition + this.height
                    && Abschlussarbeit.xMousePosition > this.xPosition && Abschlussarbeit.xMousePosition < this.yPosition + this.width) {
                    this.collision = true;
                    return this.collision;
                }
                else {
                    this.collision = false;
                    return this.collision;
                }
            };
            this.updatePosition = () => {
                this.xPosition = Abschlussarbeit.xMousePosition;
                this.yPosition = Abschlussarbeit.yMousePosition;
                Abschlussarbeit.crc2.beginPath();
                Abschlussarbeit.crc2.rect(this.xPosition, this.yPosition, this.width, this.height);
                Abschlussarbeit.crc2.fillStyle = 'green';
                Abschlussarbeit.crc2.fill();
            };
            this.width = 20;
            this.height = 80;
            this.xPosition = 20;
            this.yPosition = 20;
            console.log("Rectangle aufgerufen");
        }
        draw() {
            Abschlussarbeit.crc2.beginPath();
            Abschlussarbeit.crc2.rect(this.xPosition, this.yPosition, this.width, this.height);
            Abschlussarbeit.crc2.fillStyle = 'red';
            Abschlussarbeit.crc2.fill();
        }
    }
    Abschlussarbeit.Rectangle = Rectangle;
})(Abschlussarbeit || (Abschlussarbeit = {}));
//# sourceMappingURL=Rectangle.js.map