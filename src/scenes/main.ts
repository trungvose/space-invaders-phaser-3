import { AssetType } from "../interface/assets";
import { Bullet } from "../interface/bullet";
import { AssetFactory } from "../interface/factory/asset-factory";
import { AlienManager } from "../interface/manager/alien-manager";
import { Ship } from "../interface/ship";
import { AnimationFactory } from "../interface/factory/animation-factory";

export class MainScene extends Phaser.Scene {
    assetFactory: AssetFactory;
    animationFactory: AnimationFactory;
    bulletTime = 0;
    player: Phaser.GameObjects.Sprite;
    bullets: Phaser.Physics.Arcade.Group;
    enemyBullets: Phaser.Physics.Arcade.Group;
    alienManager: AlienManager;

    constructor() {
        super({
            key: "MainScene"
        });

    }

    preload() {
        this.load.setBaseURL("/assets")
        this.load.image(AssetType.Starfield, "/images/starfield.png");
        this.load.image(AssetType.Bullet, "/images/bullet.png");
        this.load.image(AssetType.EnemyBullet, "/images/enemy-bullet.png");
        this.load.spritesheet(AssetType.Alien, "/images/invader.png", {
            frameWidth: 32,
            frameHeight: 32
        });
        this.load.image(AssetType.Ship, "/images/player.png");
        this.load.spritesheet(AssetType.Kaboom, "/images/explode.png", {
            frameWidth: 128,
            frameHeight: 128
        });
    }

    create() {
        this.assetFactory = new AssetFactory(this);
        this.animationFactory = new AnimationFactory(this);
        this.add.tileSprite(0, 0, 800, 600, AssetType.Starfield).setOrigin(0, 0);
        this.player = Ship.create(this);
        this.bullets = this.assetFactory.createBullets();
        this.enemyBullets = this.assetFactory.createEnemyBullets();
        this.alienManager = new AlienManager(this);
    }

    private _fireBullet() {
        if (this.time.now > this.bulletTime) {
            let bullet: Bullet = this.bullets.get();
            if (bullet) {
                bullet.setX(this.player.x);
                bullet.setY(this.player.y);
                bullet.setVelocityY(-400);
                this.bulletTime = this.time.now + 200;
            }
        }
    }

}