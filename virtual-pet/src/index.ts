import "phaser";
import { BootScene } from "./bootScene";
import { PetScene } from "./petScene";

const config: GameConfig = {
    width: 800,
    height: 600,
    type: Phaser.AUTO,
    parent: "virtual-pet",
    scene: [BootScene, PetScene],
    backgroundColor: "#000000",
};

window.onload = () => {
    const game = new Phaser.Game(config);
};
