import { AssetType } from "./assets";

export class Ship {
    static create(scene: Phaser.Scene): Phaser.GameObjects.Sprite {
        return scene.physics.add.sprite(400, 500, AssetType.Ship);
    }
}