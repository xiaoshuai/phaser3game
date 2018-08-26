import 'phaser';

export class MainScene extends Phaser.Scene {
  constructor() {
    super({
      key: "MainScene"
    });
  }

  preload(): void {
    this.load.image('logo', 'assets/logo.png');
  }

  create(): void {
    var logo = this.add.image(400, 150, 'logo');

    this.tweens.add({
      targets: logo,
      y: 450,
      duration: 2000,
      ease: 'Power2',
      yoyo: true,
      loop: -1
    });
  }
};

const config: GameConfig = {
  type: Phaser.AUTO,
  parent: 'virtual-pet',
  width: 800,
  height: 600,
  scene: [MainScene]
};

window.onload = () => {
  var game = new Phaser.Game(config);
};
