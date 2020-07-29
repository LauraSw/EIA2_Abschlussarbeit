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
            };
        }
    }
    Abschlussarbeit.Symbols = Symbols;
})(Abschlussarbeit || (Abschlussarbeit = {}));
//# sourceMappingURL=Symbols.js.map