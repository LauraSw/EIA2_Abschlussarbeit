"use strict";
var Abschlussarbeit;
(function (Abschlussarbeit) {
    window.addEventListener("load", handleLoad);
    let canvasSmall;
    let canvasMedium;
    let canvasBig;
    let starSVG;
    let triangleSVG;
    let rectangleSVG;
    let circleSVG;
    Abschlussarbeit.symbols = [];
    let clearPicture;
    function handleLoad(_event) {
        //Canvas Set Up
        Abschlussarbeit.canvasElement = document.querySelector("canvas");
        if (!Abschlussarbeit.canvasElement) {
            return;
        }
        else {
            Abschlussarbeit.crc2 = Abschlussarbeit.canvasElement.getContext("2d");
            Abschlussarbeit.canvasObject = new Abschlussarbeit.Canvas(800, 400);
            Abschlussarbeit.canvasElement.addEventListener("click", getMousePosition);
            Abschlussarbeit.canvasElement.addEventListener("mousemove", snap);
        }
        //- Clear Canvas -//
        clearPicture = document.getElementById("clearPicture");
        clearPicture.addEventListener("click", function () {
            Abschlussarbeit.symbols = [];
            Abschlussarbeit.crc2.clearRect(0, 0, Abschlussarbeit.canvasElement.width, Abschlussarbeit.canvasElement.height);
            Abschlussarbeit.canvasObject.drawCanvas();
            console.log(Abschlussarbeit.symbols);
        });
        //Change Width of Canvas
        canvasSmall = document.getElementById("canvasSmall");
        canvasSmall.addEventListener("click", function () {
            if (Abschlussarbeit.canvasElement) {
                Abschlussarbeit.canvasObject.set(400, "#282828");
            }
        });
        canvasMedium = document.getElementById("canvasMedium");
        canvasMedium.addEventListener("click", function () {
            if (Abschlussarbeit.canvasElement) {
                Abschlussarbeit.canvasObject.set(600, "#F6E2A2");
            }
        });
        canvasBig = document.getElementById("canvasBig");
        canvasBig.addEventListener("click", function () {
            if (Abschlussarbeit.canvasElement) {
                Abschlussarbeit.canvasObject.set(800, "#AEC8E5");
            }
        });
        //Click SVG
        starSVG = document.getElementById("star");
        starSVG.addEventListener("click", function () {
            Abschlussarbeit.symbols.push(new Abschlussarbeit.Star());
            animate();
        });
        triangleSVG = document.getElementById("triangle");
        triangleSVG.addEventListener("click", function () {
            Abschlussarbeit.symbols.push(new Abschlussarbeit.Triangle());
            animate();
        });
        rectangleSVG = document.getElementById("rectangle");
        rectangleSVG.addEventListener("click", function () {
            Abschlussarbeit.symbols.push(new Abschlussarbeit.Rectangle());
            animate();
        });
        circleSVG = document.getElementById("circle");
        circleSVG.addEventListener("click", function () {
            Abschlussarbeit.symbols.push(new Abschlussarbeit.Circle());
            animate();
        });
    }
    function snap(_event) {
        Abschlussarbeit.xMousePosition = _event.clientX - Abschlussarbeit.canvasLeft;
        Abschlussarbeit.yMousePosition = _event.clientY - Abschlussarbeit.canvasTop;
        for (let entry of Abschlussarbeit.symbols) {
            if (entry.collision) {
                entry.position.x = Abschlussarbeit.xMousePosition;
                entry.position.y = Abschlussarbeit.yMousePosition;
                Abschlussarbeit.canvasObject.drawCanvas();
            }
        }
    }
    function getMousePosition(_event) {
        //- Mouse Position im Canvas wird bestimmt -//
        Abschlussarbeit.xMousePosition = _event.clientX - Abschlussarbeit.canvasLeft;
        Abschlussarbeit.yMousePosition = _event.clientY - Abschlussarbeit.canvasTop;
        if (Abschlussarbeit.symbols.length != 0) {
            for (let entry of Abschlussarbeit.symbols) {
                entry.collisionDetection();
            }
        }
        else {
            console.log("es gibt kein elment");
        }
    }
    function animate() {
        for (let entry of Abschlussarbeit.symbols) {
            if (entry.collision) {
                continue;
            }
            else {
                window.setInterval(function () {
                    entry.animate();
                    Abschlussarbeit.canvasObject.drawCanvas();
                }, 30);
            }
        }
    }
})(Abschlussarbeit || (Abschlussarbeit = {}));
//# sourceMappingURL=Main.js.map