import { Alien } from "../alien";
import { AnimationType } from "../factory/animation-factory";

export class AlienManager {
    aliens: Phaser.Physics.Arcade.Group;
    get hasAliveAliens(): boolean {
        return !!this.aliens.children.size
    }

    constructor(private _scene: Phaser.Scene) {
        this.aliens = this._scene.physics.add.group({
            maxSize: 40,
            classType: Alien,
            runChildUpdate: true
        });
        this._sortAliens();
    }

    getRandomAliveEnemy(): Alien {
        let random = Phaser.Math.RND.integerInRange(1, this.aliens.children.size);
        let aliens = this.aliens.children.getArray() as Alien[];
        return aliens[random];
    }

    private _sortAliens() {
        let ORIGIN_X = 100;
        let ORIGIN_Y = 100;
        for (let y = 0; y < 4; y++) {
            for (let x = 0; x < 10; x++) {
                let alien: Alien = this.aliens.create(ORIGIN_X + x * 48, ORIGIN_Y + y * 50);
                alien.setOrigin(0.5, 0.5);
                alien.play(AnimationType.Fly)
                alien.setImmovable(false);
            }
        }
        let tween = this._scene.tweens.add({
            targets: this.aliens,
            props: {
                x: 200
            },
            duration: 2000,
            ease: "Linear",
            paused: false,
            delay: 0,
            repeat: 1000,
            yoyo: true,
            onLoop: () => {

            }
        });
        tween.play()
    }
}