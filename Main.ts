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

    function handleLoad(_event: Event): void{
        //Canvas Set Up
        canvasElement = document.querySelector("canvas");
        if (!canvasElement){
            return;
        } else{
            crc2 = <CanvasRenderingContext2D>canvasElement.getContext("2d");
            canvasObject = new Canvas (800,400);
            canvasElement.addEventListener("click", getMousePosition);
            canvasElement.addEventListener("mousemove", snap);
        }
        
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
        starSVG = <HTMLDivElement>document.getElementById("star");
        starSVG.addEventListener("click", function(){
            symbols.push(new Star());
            animate();
        });

        triangleSVG = <HTMLDivElement>document.getElementById("triangle");
        triangleSVG.addEventListener("click", function(){
            symbols.push(new Triangle());
            animate();
        });

        rectangleSVG = <HTMLDivElement>document.getElementById("rectangle");
        rectangleSVG.addEventListener("click", function(){
            symbols.push(new Rectangle());
            animate();
        });

        circleSVG = <HTMLDivElement>document.getElementById("circle");
        circleSVG.addEventListener("click", function(){
            symbols.push(new Circle());
            animate();
        });    
    }

    function snap(_event: MouseEvent): void{
        xMousePosition = _event.clientX - canvasLeft;
        yMousePosition = _event.clientY - canvasTop;
        
        for (let entry of symbols) {
            if(entry.collision){
                entry.position.x = xMousePosition;
                entry.position.y = yMousePosition;
                canvasObject.drawCanvas();
            }
        }
    }

    function getMousePosition(_event: MouseEvent): void {
        //- Mouse Position im Canvas wird bestimmt -//
        xMousePosition = _event.clientX - canvasLeft;
        yMousePosition = _event.clientY - canvasTop;
        
        if(symbols.length != 0){
            for (let entry of symbols) {
                entry.collisionDetection();
            }
        }else{
            console.log("es gibt kein elment");
        }
    }

    function animate(): void{
        
        for (let entry of symbols) {
            if(entry.collision){
                continue;
            }else{
                window.setInterval(function(){
                    entry.animate();
                    canvasObject.drawCanvas();
                }, 30);
            }   
        }
    }


    // function test(_event: MouseEvent):void{
    //     let target: HTMLElement = <HTMLElement>_event.target;
    //     //console.log(target.id);
    // }

    function detectSymbol():void{
        for (let entry of symbols) {
            entry.collisionDetection();
        }
    }

    function updateSymbol(): void{
        for (let entry of symbols) {
            if(entry.collision){
                entry.updatePosition();
            }
        }
    }
}