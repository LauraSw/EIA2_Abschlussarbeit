"use strict";
var Abschlussarbeit;
(function (Abschlussarbeit) {
    class Rectangle extends Abschlussarbeit.Symbols {
        constructor() {
            super();
            this.draw = () => {
                Abschlussarbeit.crc2.beginPath();
                Abschlussarbeit.crc2.rect(this.position.x, this.position.y, this.width, this.height);
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
                    && Abschlussarbeit.xMousePosition > this.position.x && Abschlussarbeit.xMousePosition < this.position.x + this.width) {
                    console.log("Rectangle hit");
                    this.collision = !this.collision;
                }
                else {
                    console.log("no hit");
                    this.collision = false;
                }
            };
            this.position = new Abschlussarbeit.Vector(20, 20);
            this.velocity = new Abschlussarbeit.Vector(10, 10);
            console.log(this.velocity.x);
            this.color = "#D7E6AA";
            this.width = 20;
            this.height = 80;
            this.draw();
        }
    }
    Abschlussarbeit.Rectangle = Rectangle;
})(Abschlussarbeit || (Abschlussarbeit = {}));
//# sourceMappingURL=Rectangle.js.map