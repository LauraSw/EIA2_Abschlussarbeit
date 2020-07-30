"use strict";
var Abschlussarbeit;
(function (Abschlussarbeit) {
    class Star extends Abschlussarbeit.Symbols {
        constructor() {
            super();
            this.spikes = 5;
            this.outerRadius = 30;
            this.innerRadius = 15;
            this.draw = () => {
                var rot = Math.PI / 2 * 3;
                var x = this.position.x;
                var y = this.position.y;
                var step = Math.PI / this.spikes;
                Abschlussarbeit.crc2.beginPath();
                Abschlussarbeit.crc2.moveTo(this.position.x, this.position.y - this.outerRadius);
                for (let i = 0; i < this.spikes; i++) {
                    x = this.position.x + Math.cos(rot) * this.outerRadius;
                    y = this.position.y + Math.sin(rot) * this.outerRadius;
                    Abschlussarbeit.crc2.lineTo(x, y);
                    rot += step;
                    x = this.position.x + Math.cos(rot) * this.innerRadius;
                    y = this.position.y + Math.sin(rot) * this.innerRadius;
                    Abschlussarbeit.crc2.lineTo(x, y);
                    rot += step;
                }
                Abschlussarbeit.crc2.lineTo(this.position.x, this.position.y - this.outerRadius);
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
                if (Abschlussarbeit.yMousePosition > this.position.y - this.outerRadius && Abschlussarbeit.yMousePosition < this.position.y - this.outerRadius + this.height
                    && Abschlussarbeit.xMousePosition > this.position.x - this.outerRadius && Abschlussarbeit.xMousePosition < this.position.x - this.outerRadius + this.width) {
                    console.log("Rectangle hit");
                    this.collision = !this.collision;
                }
                else {
                    console.log("no hit");
                    this.collision = false;
                }
            };
            this.position = new Abschlussarbeit.Vector(50, 50);
            this.velocity = new Abschlussarbeit.Vector(5, 20);
            this.color = "#0000ff";
            this.height = 50;
            this.width = 50;
            this.draw();
            console.log("Star aufgerufen");
        }
    }
    Abschlussarbeit.Star = Star;
})(Abschlussarbeit || (Abschlussarbeit = {}));
//# sourceMappingURL=Star.js.map