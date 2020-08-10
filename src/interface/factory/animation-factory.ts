import { AssetType } from "../assets";

export enum AnimationType {
    Fly = "fly",
    Kaboom = "kaboom"
}

export class AnimationFactory {
    constructor(private _scene: Phaser.Scene) {
        this._init();
    }

    private _init() {
        this._scene.anims.create({
            key: AnimationType.Fly,
            frames: this._scene.anims.generateFrameNumbers(AssetType.Alien, {
                start: 0,
                end: 3
            }),
            frameRate: 20,
            repeat: -1
        });

        this._scene.anims.create({
            key: AnimationType.Kaboom,
            frames: this._scene.anims.generateFrameNumbers(AssetType.Kaboom, {
                start: 0,
                end: 15
            }),
            frameRate: 24,
            repeat: 0,
            hideOnComplete: true
        })
    }
}