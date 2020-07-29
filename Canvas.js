"use strict";
var Abschlussarbeit;
(function (Abschlussarbeit) {
    class Canvas {
        constructor(_whidth, _height) {
            this.background = "green";
            this.width = _whidth;
            this.height = _height;
            this.drawCanvas();
        }
        set(_width, _background) {
            this.width = _width;
            this.background = _background;
            this.drawCanvas();
        }
        drawCanvas() {
            Abschlussarbeit.crc2.canvas.width = this.width;
            Abschlussarbeit.crc2.canvas.height = this.height;
            if (Abschlussarbeit.canvasElement) {
                Abschlussarbeit.canvasElement.width = Abschlussarbeit.canvasElement.offsetWidth;
                Abschlussarbeit.canvasElement.height = Abschlussarbeit.canvasElement.offsetHeight;
                Abschlussarbeit.canvasLeft = Abschlussarbeit.canvasElement.offsetLeft + Abschlussarbeit.canvasElement.clientLeft;
                Abschlussarbeit.canvasTop = Abschlussarbeit.canvasElement.offsetTop + Abschlussarbeit.canvasElement.clientTop;
                Abschlussarbeit.crc2.fillStyle = this.background;
                Abschlussarbeit.crc2.fillRect(0, 0, Abschlussarbeit.canvasElement.width, Abschlussarbeit.canvasElement.height);
            }
            for (let entry of Abschlussarbeit.symbols) {
                entry.draw();
            }
        }
    }
    Abschlussarbeit.Canvas = Canvas;
})(Abschlussarbeit || (Abschlussarbeit = {}));
//# sourceMappingURL=Canvas.js.map