import { AssetType } from "./assets";

export class EnemyBullet extends Phaser.Physics.Arcade.Sprite {
    constructor(scene: Phaser.Scene) {
        super(scene, 0, 0, AssetType.EnemyBullet);
    }

    kill() {
        this.destroy();
    }
}

