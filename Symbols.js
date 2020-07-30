"use strict";
var Abschlussarbeit;
(function (Abschlussarbeit) {
    class Symbols {
        constructor() {
            this.collision = false;
            this.draw = () => {
                console.log("draw");
            };
            this.updatePosition = () => {
                console.log("updatePosition");
            };
            this.collisionDetection = () => {
                console.log("collisionDetection");
            };
            this.animate = () => {
                console.log("animation");
                let offset = new Abschlussarbeit.Vector(this.velocity.x, this.velocity.y);
                offset.scale(1 / 30);
                this.position.add(offset);
                this.changePosition();
            };
            this.changePosition = () => {
                this.xPosition = this.position.x;
                this.yPosition = this.position.y;
            };
        }
    }
    Abschlussarbeit.Symbols = Symbols;
})(Abschlussarbeit || (Abschlussarbeit = {}));
//# sourceMappingURL=Symbols.js.map