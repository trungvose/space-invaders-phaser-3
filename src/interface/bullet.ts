import { AssetType } from "./assets";

export class Bullet extends Phaser.Physics.Arcade.Sprite {
    constructor(scene: Phaser.Scene) {
        super(scene, 0, 0, AssetType.Bullet);
    }

    shoot(x: number, y: number) {
        this.setX(x);
        this.setY(y);
        this.setVelocityY(-400);
    }

    kill() {
        this.destroy();
    }
}

