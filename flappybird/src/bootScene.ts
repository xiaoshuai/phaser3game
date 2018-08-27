export class BootScene extends Phaser.Scene {
  private gameHeight: number;
  private gameWidth: number;
  constructor() {
    super({
      key: 'BootScene'
    });
  }

  preload(): void {
    this.gameHeight = this.sys.canvas.height;
    this.gameWidth = this.sys.canvas.width;
    this.load.image('loading', 'assets/loading.gif');
    var preloadSprite = this.add.sprite(10, this.gameHeight/2, 'loading');
    // this.load.setPreloadSprite(preloadSprite);
  }

  create(): void {
    this.scene.start('PetScene');
  }
};