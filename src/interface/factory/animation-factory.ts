import { AssetType } from "../assets";

export enum AnimationType {
    Fly = "fly"
}

export class AnimationFactory {
    constructor(private _scene: Phaser.Scene) {
        this.init();
    }

    init() {
        this._scene.anims.create({
            key: AnimationType.Fly,
            frames: this._scene.anims.generateFrameNumbers(AssetType.Alien, {
                start: 0,
                end: 3
            }),
            frameRate: 20,
            repeat: -1
        });
    }
}