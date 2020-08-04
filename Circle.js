"use strict";
var Abschlussarbeit;
(function (Abschlussarbeit) {
    class Circle extends Abschlussarbeit.Symbols {
        constructor() {
            super();
            this.draw = () => {
                Abschlussarbeit.crc2.beginPath();
                Abschlussarbeit.crc2.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI, false);
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
                if (Abschlussarbeit.yMousePosition > this.position.y - this.radius && Abschlussarbeit.yMousePosition < this.position.y + this.radius
                    && Abschlussarbeit.xMousePosition > this.position.x - this.radius && Abschlussarbeit.xMousePosition < this.position.x + this.radius) {
                    console.log("Rectangle hit");
                    this.collision = !this.collision;
                }
                else {
                    console.log("no hit");
                    this.collision = false;
                }
            };
            this.radius = 40;
            this.position = new Abschlussarbeit.Vector(this.radius * 1.5, this.radius * 1.5);
            this.velocity = new Abschlussarbeit.Vector(20, 0);
            this.color = "#DC504B";
            this.draw();
        }
    }
    Abschlussarbeit.Circle = Circle;
})(Abschlussarbeit || (Abschlussarbeit = {}));
//# sourceMappingURL=Circle.js.map