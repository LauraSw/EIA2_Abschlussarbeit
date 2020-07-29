namespace Abschlussarbeit{

    window.addEventListener("load", handleLoad);

    export let crc2: CanvasRenderingContext2D;
    export let canvasElement: HTMLCanvasElement | null;
    let canvasSmall: HTMLDivElement;
    let canvasMedium: HTMLDivElement;
    let canvasBig: HTMLDivElement;
    let canvasSmallObject: Canvas = new Canvas("60%", "#00ffff")
    let canvasMediumObject: Canvas = new Canvas("80%", "#ff00ff")
    let canvasBigbject: Canvas = new Canvas("100%", "#ff0000")
    let canvasLeft: number;
    let canvasTop: number;
    let starSVG: HTMLDivElement;
    let triangleSVG: HTMLDivElement;
    let rectangleSVG: HTMLDivElement;
    let circleSVG: HTMLDivElement;
    export let yMousePosition: number;
    export let xMousePosition: number;
    let symbols: Symbols[] = [];
    let circle: Circle;
    let rectangle: Rectangle;
    let star: Star;
    let triangle: Triangle;
    let updateSymbolPos: boolean = false;


    function handleLoad(_event: Event): void{

        //Canvas Set Up
        canvasElement = document.querySelector("canvas");
        canvasElement?.addEventListener("click", getMousePosition);
        if (!canvasElement)
            return;
        crc2 = <CanvasRenderingContext2D>canvasElement.getContext("2d");
        canvasElement.style.width ='100%';
        canvasElement.style.height='400px';
        canvasElement.width  = canvasElement.offsetWidth;
        canvasElement.height = canvasElement.offsetHeight;
        canvasLeft = canvasElement.offsetLeft + canvasElement.clientLeft;
        canvasTop = canvasElement.offsetTop + canvasElement.clientTop;

        //Change Width of Elements
        canvasSmall = <HTMLDivElement>document.getElementById("canvasSmall");
        canvasSmall.addEventListener("click", function(){ 
            canvasSmallObject.drawCanvas();
        });
        canvasMedium = <HTMLDivElement>document.getElementById("canvasMedium");
        canvasMedium.addEventListener("click", function(){
            canvasMediumObject.drawCanvas();
        });
        canvasBig = <HTMLDivElement>document.getElementById("canvasBig");
        canvasBig.addEventListener("click", function(){
            canvasBigbject.drawCanvas();
        });

        //Click SVG
        starSVG = <HTMLDivElement>document.getElementById("star");
        starSVG.addEventListener("click", function(){
            symbols.push(new Star());
        });
        triangleSVG = <HTMLDivElement>document.getElementById("triangle");
        triangleSVG.addEventListener("click", function(){
            symbols.push(new Triangle());
        });
        rectangleSVG = <HTMLDivElement>document.getElementById("rectangle");
        rectangleSVG.addEventListener("click", function(){
            symbols.push(new Rectangle());
        });
        circleSVG = <HTMLDivElement>document.getElementById("circle");
        circleSVG.addEventListener("click", function(){
            circle = new Circle();

            symbols.push(new Circle());
        });

        document.addEventListener("click", test);

        
    }

    function getMousePosition(_event: MouseEvent): void {
        xMousePosition = _event.clientX - canvasLeft;
        yMousePosition = _event.clientY - canvasTop;
        if(updateSymbolPos){
            updateSymbol();
        }else{
            detectSymbol();
        }
        console.log("updateSymbolPos: "+updateSymbolPos)
    }

    function test(_event: MouseEvent):void{
        let target: HTMLElement = <HTMLElement>_event.target;
        //console.log(target.id);
    }

    function detectSymbol():void{
        for (let entry of symbols) {
            if(entry.collisionDetection()){
                updateSymbolPos = true
            }
        }
    }

    function updateSymbol(): void{
        for (let entry of symbols) {
            if(entry.collision){
                entry.updatePosition();
                entry.collision = false;
            }
        }
        updateSymbolPos = false;
    }

    // function updateCanvas(_width: number): void{
    //     //
    // }
}