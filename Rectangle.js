"use strict";
var Abschlussarbeit;
(function (Abschlussarbeit) {
    class Rectangle extends Abschlussarbeit.Symbols {
        constructor() {
            super();
            this.draw = () => {
                Abschlussarbeit.crc2.beginPath();
                Abschlussarbeit.crc2.rect(this.xPosition, this.yPosition, this.width, this.height);
                Abschlussarbeit.crc2.fillStyle = this.color;
                Abschlussarbeit.crc2.fill();
            };
            this.updatePosition = () => {
                //- Ändert den neuen x,y Wert auf die Mouse Position ab -//
                this.xPosition = Abschlussarbeit.xMousePosition;
                this.yPosition = Abschlussarbeit.yMousePosition;
                this.collision = false;
                Abschlussarbeit.canvasObject.drawCanvas();
            };
            this.collisionDetection = () => {
                //- Prüft, ob Element mit Mouse berührt wurde -//
                console.log("-------------");
                console.log("Mouse(x,y): " + Abschlussarbeit.xMousePosition + ", " + Abschlussarbeit.yMousePosition);
                console.log("Object(x,y): " + this.xPosition + ", " + this.yPosition + " Object (hight/width): " + (this.xPosition + this.width) + ", " + (this.yPosition + this.height));
                console.log("-------------");
                if (Abschlussarbeit.yMousePosition > this.xPosition && Abschlussarbeit.yMousePosition < this.yPosition + this.height
                    && Abschlussarbeit.xMousePosition > this.xPosition && Abschlussarbeit.xMousePosition < this.yPosition + this.width) {
                    console.log("hit");
                    Abschlussarbeit.isSymbolHit = true;
                    this.collision = true;
                }
                else {
                    console.log("no hit");
                    this.collision = false;
                }
            };
            this.animate = () => {
            };
            this.color = "#00ff00";
            this.width = 20;
            this.height = 80;
            this.xPosition = 20;
            this.yPosition = 20;
            this.draw();
        }
    }
    Abschlussarbeit.Rectangle = Rectangle;
})(Abschlussarbeit || (Abschlussarbeit = {}));
//# sourceMappingURL=Rectangle.js.map