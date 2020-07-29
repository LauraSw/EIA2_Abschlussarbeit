namespace Abschlussarbeit{

    window.addEventListener("load", handleLoad);

    export let crc2: CanvasRenderingContext2D;
    export let canvasElement: HTMLCanvasElement | null;
    export let canvasObject: Canvas;
    let canvasSmall: HTMLDivElement;
    let canvasMedium: HTMLDivElement;
    let canvasBig: HTMLDivElement;
    export let canvasLeft: number;
    export let canvasTop: number;
    let starSVG: HTMLDivElement;
    let triangleSVG: HTMLDivElement;
    let rectangleSVG: HTMLDivElement;
    let circleSVG: HTMLDivElement;
    export let yMousePosition: number;
    export let xMousePosition: number;
    export let symbols: Symbols[] = [];
    let circle: Circle;
    let rectangle: Rectangle;
    let star: Star;
    let triangle: Triangle;
    let clearPicture: HTMLDivElement;
    export let isSymbolHit: boolean = false;


    function handleLoad(_event: Event): void{
        //Canvas Set Up
        canvasElement = document.querySelector("canvas");
        if (!canvasElement){
            return;
        } else{
            
            crc2 = <CanvasRenderingContext2D>canvasElement.getContext("2d");
            canvasObject = new Canvas (800,400);
        }
        

        canvasElement?.addEventListener("click", getMousePosition);
        

        // canvasElement.width  = canvasElement.offsetWidth;
        // canvasElement.height = canvasElement.offsetHeight;
        // canvasLeft = canvasElement.offsetLeft + canvasElement.clientLeft;
        // canvasTop = canvasElement.offsetTop + canvasElement.clientTop;

        //- Clear Canvas -//
        clearPicture = <HTMLDivElement>document.getElementById("clearPicture");
        clearPicture.addEventListener("click", function(){
            symbols = [];
            crc2.clearRect(0, 0, canvasElement!.width, canvasElement!.height);
            canvasObject.drawCanvas();
            console.log(symbols);
        });


        //Change Width of Canvas
        canvasSmall = <HTMLDivElement>document.getElementById("canvasSmall");
        canvasSmall.addEventListener("click", function(){
            if(canvasElement){                       
                canvasObject.set(400, "black")
            }
        });
        canvasMedium = <HTMLDivElement>document.getElementById("canvasMedium");
        canvasMedium.addEventListener("click", function(){
            if(canvasElement){                       
                canvasObject.set(600, "red")
            }
        });
        canvasBig = <HTMLDivElement>document.getElementById("canvasBig");
        canvasBig.addEventListener("click", function(){
            if(canvasElement){                       
                canvasObject.set(800, "green")
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

        rectangleSVG = <HTMLDivElement>document.getElementById("rectangle");
        rectangleSVG.addEventListener("click", function(){
            symbols.push(new Rectangle());
        });

        // // circleSVG = <HTMLDivElement>document.getElementById("circle");
        // // circleSVG.addEventListener("click", function(){
        // //     symbols.push(new Circle());
        // // });

        // //document.addEventListener("click", test);
       
        
    }

    function getMousePosition(_event: MouseEvent): void {
        //- Mouse Position im Canvas wird bestimmt -//
        xMousePosition = _event.clientX - canvasLeft;
        yMousePosition = _event.clientY - canvasTop;

        if(symbols.length != 0){
            console.log("es gibt ein element");
            
            if(!isSymbolHit){
                detectSymbol();
            }else{
                updateSymbol();
            }
            
        }else{
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

    function detectSymbol():void{
        for (let entry of symbols) {
            entry.collisionDetection();
            console.log("isSymolHit: "+isSymbolHit);
        }
    }

    function updateSymbol(): void{
        for (let entry of symbols) {
            if(entry.collision){
                entry.updatePosition();
            }
        }
        console.log("update symbol")
        isSymbolHit = false;
    }
}