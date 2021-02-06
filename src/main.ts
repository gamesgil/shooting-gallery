import * as PIXI from 'pixi.js';
import duck from './images/duck.png';

class GameApp {
    private app: PIXI.Application;

    constructor(parent: HTMLElement, width: number, height: number) {
        this.app = new PIXI.Application({width, height, backgroundColor : 0x000000});
        document.body.appendChild(this.app.view);
        const loader = new PIXI.Loader();
        loader.add(duck).load(() => this.start());
    }

    start() {
        const sprite = new PIXI.Sprite(PIXI.Texture.from(duck));
        this.app.stage.addChild(sprite);
        sprite.x = 100;
        sprite.y = 150;
    }
}

const game = new GameApp(document.body,  window.innerWidth, window.innerHeight);
