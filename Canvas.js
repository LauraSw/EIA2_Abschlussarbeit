"use strict";
var Abschlussarbeit;
(function (Abschlussarbeit) {
    class Canvas {
        constructor(_width, _backgroundColor) {
            this.width = _width;
            this.backgroundColor = _backgroundColor;
            this.drawCanvas();
        }
        set(_width, _backgroundColor) {
            this.width = _width;
            this.backgroundColor = _backgroundColor;
        }
        drawCanvas() {
            Abschlussarbeit.canvasElement?.setAttribute("style", "width:" + this.width + "; height: 400px; background-color:" + this.backgroundColor);
        }
    }
    Abschlussarbeit.Canvas = Canvas;
})(Abschlussarbeit || (Abschlussarbeit = {}));
//# sourceMappingURL=Canvas.js.map