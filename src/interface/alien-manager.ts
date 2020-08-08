import { Alien } from "./alien";

export class AlienManager {
    aliens: Phaser.Physics.Arcade.Group;
    constructor(scene: Phaser.Scene) {
        this.aliens = scene.physics.add.group({
            maxSize: 40,
            classType: Alien,
            runChildUpdate: true
        });
        this._sortAliens();
    }

    _sortAliens() {
        for (let y = 0; y < 4; y++) {
            for (let x = 0; x < 10; x++) {
                this.aliens.create(x * 48, y * 50) 
            }
        }

    }
}