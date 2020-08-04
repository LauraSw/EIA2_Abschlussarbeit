namespace Abschlussarbeit{

    export class Canvas{
        public width: number;
        public height: number;
        public background: string ="#AEC8E5";

        constructor(_whidth: number, _height: number){
            this.width = _whidth;
            this.height = _height
            this.drawCanvas();
        }

        public set(_width: number, _background: string){
            this.width = _width;
            this.background = _background;
            this.drawCanvas();
        }

        public drawCanvas(){
            crc2.canvas.width  = this.width;
            crc2.canvas.height  = this.height;
            if(canvasElement){       
                canvasElement.width  = canvasElement.offsetWidth;
                canvasElement.height = canvasElement.offsetHeight;  
                canvasLeft = canvasElement.offsetLeft + canvasElement.clientLeft;
                canvasTop = canvasElement.offsetTop + canvasElement.clientTop;             
                crc2.fillStyle = this.background;  
                crc2.fillRect(0, 0, canvasElement.width, canvasElement.height);
            }
            for (let entry of symbols) {
                entry.draw();
            }
        }
    }
}