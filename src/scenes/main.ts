import { AssetType } from "../interface/assets";

export class MainScene extends Phaser.Scene {
    constructor() {
        super({
            key: "MainScene"
        });
    }

    preload() {
        this.load.setBaseURL("/assets")
        this.load.image(AssetType.Starfield, "/images/starfield.png");
    }

    create() {
        this.add.tileSprite(0, 0, 800, 600, AssetType.Starfield);
    }
}