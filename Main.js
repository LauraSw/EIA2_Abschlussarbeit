"use strict";
var Abschlussarbeit;
(function (Abschlussarbeit) {
    window.addEventListener("load", handleLoad);
    let canvasSmall;
    let canvasMedium;
    let canvasBig;
    let canvasSmallObject = new Abschlussarbeit.Canvas("60%", "#00ffff");
    let canvasMediumObject = new Abschlussarbeit.Canvas("80%", "#ff00ff");
    let canvasBigbject = new Abschlussarbeit.Canvas("100%", "#ff0000");
    let canvasLeft;
    let canvasTop;
    let starSVG;
    let triangleSVG;
    let rectangleSVG;
    let circleSVG;
    let symbols = [];
    let circle;
    let rectangle;
    let star;
    let triangle;
    let updateSymbolPos = false;
    function handleLoad(_event) {
        //Canvas Set Up
        Abschlussarbeit.canvasElement = document.querySelector("canvas");
        Abschlussarbeit.canvasElement?.addEventListener("click", getMousePosition);
        if (!Abschlussarbeit.canvasElement)
            return;
        Abschlussarbeit.crc2 = Abschlussarbeit.canvasElement.getContext("2d");
        Abschlussarbeit.canvasElement.style.width = '100%';
        Abschlussarbeit.canvasElement.style.height = '400px';
        Abschlussarbeit.canvasElement.width = Abschlussarbeit.canvasElement.offsetWidth;
        Abschlussarbeit.canvasElement.height = Abschlussarbeit.canvasElement.offsetHeight;
        canvasLeft = Abschlussarbeit.canvasElement.offsetLeft + Abschlussarbeit.canvasElement.clientLeft;
        canvasTop = Abschlussarbeit.canvasElement.offsetTop + Abschlussarbeit.canvasElement.clientTop;
        //Change Width of Elements
        canvasSmall = document.getElementById("canvasSmall");
        canvasSmall.addEventListener("click", function () {
            canvasSmallObject.drawCanvas();
        });
        canvasMedium = document.getElementById("canvasMedium");
        canvasMedium.addEventListener("click", function () {
            canvasMediumObject.drawCanvas();
        });
        canvasBig = document.getElementById("canvasBig");
        canvasBig.addEventListener("click", function () {
            canvasBigbject.drawCanvas();
        });
        //Click SVG
        starSVG = document.getElementById("star");
        starSVG.addEventListener("click", function () {
            symbols.push(new Abschlussarbeit.Star());
        });
        triangleSVG = document.getElementById("triangle");
        triangleSVG.addEventListener("click", function () {
            symbols.push(new Abschlussarbeit.Triangle());
        });
        rectangleSVG = document.getElementById("rectangle");
        rectangleSVG.addEventListener("click", function () {
            symbols.push(new Abschlussarbeit.Rectangle());
        });
        circleSVG = document.getElementById("circle");
        circleSVG.addEventListener("click", function () {
            circle = new Abschlussarbeit.Circle();
            symbols.push(new Abschlussarbeit.Circle());
        });
        document.addEventListener("click", test);
    }
    function getMousePosition(_event) {
        Abschlussarbeit.xMousePosition = _event.clientX - canvasLeft;
        Abschlussarbeit.yMousePosition = _event.clientY - canvasTop;
        if (updateSymbolPos) {
            updateSymbol();
        }
        else {
            detectSymbol();
        }
        console.log("updateSymbolPos: " + updateSymbolPos);
    }
    function test(_event) {
        let target = _event.target;
        //console.log(target.id);
    }
    function detectSymbol() {
        for (let entry of symbols) {
            if (entry.collisionDetection()) {
                updateSymbolPos = true;
            }
        }
    }
    function updateSymbol() {
        for (let entry of symbols) {
            if (entry.collision) {
                entry.updatePosition();
                entry.collision = false;
            }
        }
        updateSymbolPos = false;
    }
    // function updateCanvas(_width: number): void{
    //     //
    // }
})(Abschlussarbeit || (Abschlussarbeit = {}));
//# sourceMappingURL=Main.js.map