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
    let circle;
    let rectangle;
    let star;
    let triangle;
    let clearPicture;
    Abschlussarbeit.isSymbolHit = false;
    function handleLoad(_event) {
        //Canvas Set Up
        Abschlussarbeit.canvasElement = document.querySelector("canvas");
        if (!Abschlussarbeit.canvasElement) {
            return;
        }
        else {
            Abschlussarbeit.crc2 = Abschlussarbeit.canvasElement.getContext("2d");
            Abschlussarbeit.canvasObject = new Abschlussarbeit.Canvas(800, 400);
        }
        Abschlussarbeit.canvasElement?.addEventListener("click", getMousePosition);
        // canvasElement.width  = canvasElement.offsetWidth;
        // canvasElement.height = canvasElement.offsetHeight;
        // canvasLeft = canvasElement.offsetLeft + canvasElement.clientLeft;
        // canvasTop = canvasElement.offsetTop + canvasElement.clientTop;
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
                Abschlussarbeit.canvasObject.set(400, "black");
            }
        });
        canvasMedium = document.getElementById("canvasMedium");
        canvasMedium.addEventListener("click", function () {
            if (Abschlussarbeit.canvasElement) {
                Abschlussarbeit.canvasObject.set(600, "red");
            }
        });
        canvasBig = document.getElementById("canvasBig");
        canvasBig.addEventListener("click", function () {
            if (Abschlussarbeit.canvasElement) {
                Abschlussarbeit.canvasObject.set(800, "green");
            }
        });
        //Click SVG
        // starSVG = <HTMLDivElement>document.getElementById("star");
        // starSVG.addEventListener("click", function(){
        //     symbols.push(new Star());
        // });
        // triangleSVG = <HTMLDivElement>document.getElementById("triangle");
        // triangleSVG.addEventListener("click", function(){
        //     symbols.push(new Triangle());
        // });
        rectangleSVG = document.getElementById("rectangle");
        rectangleSVG.addEventListener("click", function () {
            Abschlussarbeit.symbols.push(new Abschlussarbeit.Rectangle());
        });
        // // circleSVG = <HTMLDivElement>document.getElementById("circle");
        // // circleSVG.addEventListener("click", function(){
        // //     symbols.push(new Circle());
        // // });
        // //document.addEventListener("click", test);
    }
    function getMousePosition(_event) {
        //- Mouse Position im Canvas wird bestimmt -//
        Abschlussarbeit.xMousePosition = _event.clientX - Abschlussarbeit.canvasLeft;
        Abschlussarbeit.yMousePosition = _event.clientY - Abschlussarbeit.canvasTop;
        if (Abschlussarbeit.symbols.length != 0) {
            console.log("es gibt ein element");
            if (!Abschlussarbeit.isSymbolHit) {
                detectSymbol();
            }
            else {
                updateSymbol();
            }
        }
        else {
            console.log("es gibt kein elment");
        }
        // if(updateSymbolPos){
        //     updateSymbol();
        // }else{
        //     detectSymbol();
        // }
        // console.log("updateSymbolPos: "+updateSymbolPos)
    }
    // function test(_event: MouseEvent):void{
    //     let target: HTMLElement = <HTMLElement>_event.target;
    //     //console.log(target.id);
    // }
    function detectSymbol() {
        for (let entry of Abschlussarbeit.symbols) {
            entry.collisionDetection();
            console.log("isSymolHit: " + Abschlussarbeit.isSymbolHit);
        }
    }
    function updateSymbol() {
        for (let entry of Abschlussarbeit.symbols) {
            if (entry.collision) {
                entry.updatePosition();
            }
        }
        console.log("update symbol");
        Abschlussarbeit.isSymbolHit = false;
    }
})(Abschlussarbeit || (Abschlussarbeit = {}));
//# sourceMappingURL=Main.js.map