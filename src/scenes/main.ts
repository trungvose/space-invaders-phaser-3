import { AssetType } from "../interface/assets";
import { Bullet } from "../interface/bullet";
import { AssetManager } from "../interface/manager/asset-manager";
import { AlienManager } from "../interface/manager/alien-manager";
import { Ship } from "../interface/ship";
import { AnimationFactory, AnimationType } from "../interface/factory/animation-factory";
import { Alien } from "../interface/alien";
import { Kaboom } from "../interface/kaboom";

export class MainScene extends Phaser.Scene {
    assetManager: AssetManager;
    animationFactory: AnimationFactory;
    bulletTime = 0;
    firingTimer = 0;
    starfield: Phaser.GameObjects.TileSprite;
    player: Phaser.GameObjects.Sprite;

    alienManager: AlienManager;
    cursors: Phaser.Types.Input.Keyboard.CursorKeys;
    fireKey: Phaser.Input.Keyboard.Key;
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
        this.assetManager = new AssetManager(this);
        this.animationFactory = new AnimationFactory(this);
        this.cursors = this.input.keyboard.createCursorKeys();
        this.fireKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        this.starfield = this.add.tileSprite(0, 0, 800, 600, AssetType.Starfield).setOrigin(0, 0);
        this.player = Ship.create(this);
        this.alienManager = new AlienManager(this);
    }

    update() {
        this.starfield.tilePositionY -= 1;
        this._shipKeyboardHandler();
    }

    private _shipKeyboardHandler() {
        let playerBody = this.player.body as Phaser.Physics.Arcade.Body;
        playerBody.setVelocity(0, 0);
        if (this.cursors.left.isDown) {
            playerBody.setVelocityX(-200);
        }
        else if (this.cursors.right.isDown) {
            playerBody.setVelocityX(200);
        }

        if (this.fireKey.isDown) {
            this._fireBullet();
        }

        if (this.time.now > this.firingTimer) {
            this._enemyFires()
        }

        this.physics.overlap(this.assetManager.bullets, this.alienManager.aliens, this._bulletHitAliens, null, this);
        this.physics.overlap(this.assetManager.enemyBullets, this.player, this._enemyBulletHitPlayer, null, this);
    }

    private _bulletHitAliens(bullet: Bullet, alien: Alien) {
        let explosion: Kaboom = this.assetManager.explosions.get();
        bullet.kill();
        alien.kill(explosion);
    }

    private _enemyBulletHitPlayer() {

    }

    private _enemyFires() {

    }

    private _fireBullet() {
        if (this.time.now > this.bulletTime) {
            let bullet: Bullet = this.assetManager.bullets.get();
            if (bullet) {
                bullet.shoot(this.player.x, this.player.y - 18)
                this.bulletTime = this.time.now + 200;
            }
        }
    }

}