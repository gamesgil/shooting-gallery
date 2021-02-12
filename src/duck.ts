import { Container, Sprite, Texture } from "pixi.js";

export class Duck {
    private readonly sprite: Sprite;
    private speedX = 2;
    private speedY = 0;
    private sine = 0;

    constructor(duck: Texture, stage: Container) {
        this.sprite = new Sprite(duck);
        stage.addChild(this.sprite);
    }

    update() {
        this.x += this.speedX;
        this.y = 50 + Math.sin(this.sine) * 50;
        this.sine += 0.1;
    }

    set x(pos: number) {
        this.sprite.x = pos;
    }

    get x(): number {
        return this.sprite.x;
    }

    set y(pos: number) {
        this.sprite.y = pos;
    }

    get y(): number {
        return this.sprite.y;
    }
}