namespace Abschlussarbeit{

    export class Canvas{
        public width: String;
        public backgroundColor: String;
        public htmlElement: HTMLCanvasElement

        constructor(_width: String, _backgroundColor: String){
            this.width=_width;
            this.backgroundColor=_backgroundColor;
            this.drawCanvas();
        }

        public set(_width: String, _backgroundColor: String){
            this.width = _width;
            this.backgroundColor = _backgroundColor;
        }

        public drawCanvas(){
            canvasElement?.setAttribute("style", "width:"+this.width+"; height: 400px; background-color:" + this.backgroundColor);
        }
    }
}