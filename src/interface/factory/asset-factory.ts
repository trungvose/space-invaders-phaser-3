import { EnemyBullet } from "../enemy-bullet";
import { Bullet } from "../bullet";

export class AssetFactory {
    constructor(private _scene: Phaser.Scene) {

    }
    createEnemyBullets(): Phaser.Physics.Arcade.Group {
        let enemyBullets = this._scene.physics.add.group({
            maxSize: 30,
            classType: EnemyBullet,
            runChildUpdate: true
        });
        enemyBullets.setOrigin(0.5, 1);
        return enemyBullets;
    }

    createBullets(): Phaser.Physics.Arcade.Group {
        let bullets = this._scene.physics.add.group({
            maxSize: 30,
            classType: Bullet,
            runChildUpdate: true
        });
        bullets.setOrigin(0.5, 1);
        return bullets;
    }

}