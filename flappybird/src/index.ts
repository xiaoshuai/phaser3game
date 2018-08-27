import 'phaser';
import { BootScene } from './flappybird/bootScene';
import { GameScene } from './flappybird/gameScene';

const config: GameConfig = {
  width: 800,
  height: 600,
  type: Phaser.AUTO,
  parent: 'virtual-pet',
  scene: [BootScene, GameScene],
  backgroundColor: "#000000"
};

window.onload = () => {
  var game = new Phaser.Game(config);
};
