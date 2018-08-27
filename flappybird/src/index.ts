import "phaser";
import { BootScene } from "./bootScene";
import { MenuScene } from "./menuScene";
import { GameScene } from "./gameScene";

const config: GameConfig = {
    title: "Flappy Bird",
    url: "https://github.com/digitsensitive/phaser3-typescript",
    version: "1.0",
    width: 405,
    height: 600,
    zoom: 1,
    type: Phaser.AUTO,
    parent: "game",
    scene: [BootScene, MenuScene, GameScene],
    input: {
        keyboard: true,
        mouse: false,
        touch: false,
        gamepad: false
    },
    physics: {
        default: "arcade",
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    backgroundColor: "#98d687",
    // pixelArt: true,
    // antialias: false
};

export class Game extends Phaser.Game {
    constructor(config: GameConfig) {
        super(config);
    }
}

window.onload = () => {
    var game = new Game(config);
};
