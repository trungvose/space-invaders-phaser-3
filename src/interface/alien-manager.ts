import { Alien } from "./alien";
import { AnimationType } from "./animation";
import { AssetType } from "./assets";

export class AlienManager {
    aliens: Phaser.Physics.Arcade.Group;
    constructor(private _scene: Phaser.Scene) {
        this.aliens = this._scene.physics.add.group({
            maxSize: 40,
            classType: Alien,
            runChildUpdate: true,
        });
        this._scene.anims.create({
            key: AnimationType.Fly,
            frames: this._scene.anims.generateFrameNumbers(AssetType.Alien, {
                start: 0,
                end: 3
            }),
            frameRate: 20,
            repeat: -1
        });
        this._sortAliens();
    }

    _sortAliens() {
        let ORIGIN_X = 100;
        let ORIGIN_Y = 50;
        for (let y = 0; y < 4; y++) {
            for (let x = 0; x < 10; x++) {
                let alien: Alien = this.aliens.create(ORIGIN_X + x * 48, ORIGIN_Y + y * 50);
                alien.setOrigin(0.5, 0.5);
                alien.play(AnimationType.Fly)
                alien.setImmovable(false);
            }
        }

    }
}