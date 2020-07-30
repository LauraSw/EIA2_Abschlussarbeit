"use strict";
var Abschlussarbeit;
(function (Abschlussarbeit) {
    class Triangle extends Abschlussarbeit.Symbols {
        constructor() {
            super();
            this.radius = 20;
            this.draw = () => {
                Abschlussarbeit.crc2.moveTo(this.position.x, this.position.y);
                Abschlussarbeit.crc2.lineTo(this.position.x - (this.width / 2), this.position.y + this.height);
                Abschlussarbeit.crc2.lineTo(this.position.x + (this.width / 2), this.position.y + this.height);
                Abschlussarbeit.crc2.closePath();
                Abschlussarbeit.crc2.fillStyle = this.color;
                Abschlussarbeit.crc2.fill();
            };
            this.updatePosition = () => {
                //- Ändert den neuen x,y Wert auf die Mouse Position ab -//
                this.position.x = Abschlussarbeit.xMousePosition;
                this.position.y = Abschlussarbeit.yMousePosition;
                this.collision = false;
                Abschlussarbeit.canvasObject.drawCanvas();
            };
            this.collisionDetection = () => {
                //- Prüft, ob Element mit Mouse berührt wurde -//
                console.log("-------------");
                console.log("Mouse(x,y): " + Abschlussarbeit.xMousePosition + ", " + Abschlussarbeit.yMousePosition);
                console.log("Object(x,y): " + this.xPosition + ", " + this.yPosition + " Object (height/width): " + (this.xPosition + this.width) + ", " + (this.yPosition + this.height));
                console.log("-------------");
                console.log("yMousePosition: " + Abschlussarbeit.yMousePosition + ", this.yPosition: " + this.yPosition);
                if (Abschlussarbeit.yMousePosition > this.position.y && Abschlussarbeit.yMousePosition < this.position.y + this.height
                    && Abschlussarbeit.xMousePosition > this.position.x - (this.width / 2) && Abschlussarbeit.xMousePosition < this.position.x + (this.width / 2)) {
                    console.log("Rectangle hit");
                    this.collision = !this.collision;
                }
                else {
                    console.log("no hit");
                    this.collision = false;
                }
            };
            this.position = new Abschlussarbeit.Vector(50, 20);
            this.velocity = new Abschlussarbeit.Vector(20, 40);
            this.color = "#FFCC00";
            this.width = 60;
            this.height = 60;
            this.draw();
        }
    }
    Abschlussarbeit.Triangle = Triangle;
})(Abschlussarbeit || (Abschlussarbeit = {}));
//# sourceMappingURL=Triangle.js.map