export class GameScene extends Phaser.Scene {
    constructor() {
        super({
            key: "GameScene",
        });
    }
    public init(): void {
    }

    public preload(): void {
        this.load.image("logo", "assets/logo.png");
    }

    public create(): void {
        const logo = this.add.image(400, 150, "logo");

        this.tweens.add({
            duration: 2000,
            ease: "Power2",
            loop: -1,
            targets: logo,
            y: 450,
            yoyo: true,
        });
    }
}
