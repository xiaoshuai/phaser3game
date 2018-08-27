export class Bird extends Phaser.GameObjects.Sprite {
    private jumpKey: Phaser.Input.Keyboard.Key;
    private anim: Phaser.Tweens.Tween[];
    private isDead: boolean = false;

    constructor(params) {
        super(params.scene, params.x, params.y, params.key, params.frame);

        // image
        this.setScale(3);
        this.setOrigin(0, 0);

        // physics
        params.scene.physics.world.enable(this);
        if (this.body instanceof Phaser.Physics.Arcade.Body) {
                    this.body.setGravityY(1000);
                    this.body.setSize(17, 12);
            }

        // animations & tweens
        this.anim = [];
        this.anim.push(
            params.scene.tweens.add({
                angle: -20,
                duration: 100,
                targets: this,
            }),
        );

        // input
        this.jumpKey = params.scene.input.keyboard.addKey(
            Phaser.Input.Keyboard.KeyCodes.SPACE,
        );

        params.scene.add.existing(this);
    }

    public getDead(): boolean {
        return this.isDead;
    }

    public setDead(dead): void {
        this.isDead = dead;
    }

    public update(): void {
        this.handleAngleChange();
        this.handleInput();
        this.isOffTheScreen();
    }

    public flap(): void {
            if (this.body instanceof Phaser.Physics.Arcade.Body) {
                    this.body.setVelocityY(-350);
            }
            this.anim[0].restart();
    }

    private handleAngleChange(): void {
        if (this.angle < 20) {
            this.angle += 1;
        }
    }

    private handleInput(): void {
        if (this.jumpKey.isDown) {
            this.flap();
        }
    }

    private isOffTheScreen(): void {
        if (this.y + this.height > this.scene.sys.canvas.height) {
            this.isDead = true;
        }
    }
}
