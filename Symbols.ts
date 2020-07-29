namespace Abschlussarbeit{

    export abstract class Symbols{
        public color: string;
        public xPosition: number;
        public yPosition: number;
        public width: number;
        public height: number;
        public collision: boolean = false;

        constructor(){
        }

        public draw = (): void =>{
            console.log("draw");
        }

        public updatePosition = (): void =>{
            console.log("updatePosition");
        }

        public collisionDetection = () =>{
            console.log("collisionDetection");
        }

        public animate = () =>{
            console.log("animation")
        }
    }
}