namespace Abschlussarbeit{

    export abstract class Symbols{
        public color: String;
        public xPosition: number;
        public yPosition: number;
        public width: number;
        public height: number;
        public collision: boolean = false;

        constructor(){
            console.log("Symbols aufgerufen");
        }

        public collisionDetection = (): boolean =>{
            return false;
        }

        public updatePosition = () =>{
            
        }

    }
}