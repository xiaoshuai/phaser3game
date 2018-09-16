export class MenuScene extends Phaser.Scene {
    private startKey: Phaser.Input.Keyboard.Key;
    private bitmapTexts: Phaser.GameObjects.BitmapText[] = [];

    constructor() {
        super({
            key: "MenuScene"
        });
    }

    init(): void {
        this.startKey = this.input.keyboard.addKey(
            Phaser.Input.Keyboard.KeyCodes.S
        );
        this.startKey.isDown = false;
    }

    create(): void {
        this.bitmapTexts.push(
            this.add.bitmapText(
                this.sys.canvas.width / 2 - 135,
                this.sys.canvas.height / 2 - 80,
                "flappyBirdFont",
                "FLAPPY BIRD",
                40
            )
        );

        this.bitmapTexts.push(
            this.add.bitmapText(
                this.sys.canvas.width / 2 - 50,
                this.sys.canvas.height / 2 - 10,
                "flappyBirdFont",
                "S: PLAY",
                30
            )
        );
    }

    update(): void {
        if (this.startKey.isDown) {
            this.scene.start("GameScene");
        }
    }
}
