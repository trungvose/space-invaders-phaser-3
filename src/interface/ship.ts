import { AssetType } from "./assets";

export class Ship {
    static create(scene: Phaser.Scene): Phaser.GameObjects.Sprite {
        let ship = scene.physics.add.sprite(400, 500, AssetType.Ship);
        ship.setCollideWorldBounds(true);
        return ship;
    }
}