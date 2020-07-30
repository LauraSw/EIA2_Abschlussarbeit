namespace Abschlussarbeit{

    export abstract class Symbols{
        public color: string;
        public xPosition: number;
        public yPosition: number;
        public width: number;
        public height: number;
        public collision: boolean = false;
        public radius: number
        public position: Vector;
        public velocity: Vector;

        constructor(){
            
        }

        public draw = (): void =>{
            console.log("draw");
        }

        public updatePosition = (): void =>{
            console.log("updatePosition");
        }

        public collisionDetection = (): void =>{
            console.log("collisionDetection");
        }

        public animate = (): void =>{
            console.log("animation");
            let offset: Vector = new Vector(this.velocity.x, this.velocity.y);
            offset.scale(1 / 30);
            this.position.add(offset);
            this.changePosition();
        }

        public changePosition = (): void =>{
            this.xPosition = this.position.x;
            this.yPosition = this.position.y
        }
    }
}