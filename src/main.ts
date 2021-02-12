import { Sprite } from 'pixi.js';
import * as PIXI from 'pixi.js';
import { Duck } from './duck';
import duck from './images/duck.png';
import crosshair from './images/crosshair.png';
import {Renderer} from 'pixi.js';

class GameApp {
    private app: PIXI.Application;
    private duckView: Duck;
    private crosshairView: Sprite;

    constructor(parent: HTMLElement, width: number, height: number) {
        this.app = new PIXI.Application({width, height, backgroundColor : 0x000000});
        document.body.appendChild(this.app.view);
        const loader = new PIXI.Loader();
        loader.add(duck).load(() => this.start());

    }

    start() {
        this.duckView = new Duck(PIXI.Texture.from(duck), this.app.stage);
        this.duckView.x = 100;
        this.duckView.y = 150;

        this.crosshairView = new Sprite(PIXI.Texture.from(crosshair));
        this.app.stage.addChild(this.crosshairView);

        this.app.ticker.add(delta => this.update(delta));
    }

    update(delta) {
        this.duckView.update();
        this.crosshairView.x = this.app.renderer.plugins.interaction.mouse.global.x - this.crosshairView.width / 2;
        this.crosshairView.y = this.app.renderer.plugins.interaction.mouse.global.y - this.crosshairView.height / 2;
    }
}

const game = new GameApp(document.body,  window.innerWidth, window.innerHeight);
