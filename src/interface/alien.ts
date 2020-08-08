import { AssetType } from "./assets";

export class Alien extends Phaser.Physics.Arcade.Sprite {
  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, AssetType.Alien)
  }
}