import "phaser";
import { BootScene } from "./bootScene";
import { GameScene } from "./gameScene";

const config: GameConfig = {
    backgroundColor: "#000000",
    height: 600,
    parent: "virtual-pet",
    scene: [BootScene, GameScene],
    type: Phaser.AUTO,
    width: 800,
};

window.onload = () => {
    const game = new Phaser.Game(config);
};
