import { AssetType } from "./assets";

export class Kaboom extends Phaser.Physics.Arcade.Sprite {
    constructor(scene: Phaser.Scene) {
        super(scene, 0, 0, AssetType.Kaboom);
    }
}