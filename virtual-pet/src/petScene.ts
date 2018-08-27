export class PetScene extends Phaser.Scene {
    constructor() {
        super({
            key: "PetScene",
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
            targets: logo,
            y: 450,
            duration: 2000,
            ease: "Power2",
            yoyo: true,
            loop: -1,
        });
    }
}
