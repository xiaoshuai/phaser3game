import 'phaser';

class MainScene {
    preload() {
        this.load.image('logo', 'assets/logo.png');
    }

    create() {
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

var config = {
    type: Phaser.AUTO,
    parent: 'virtual-pet',
    width: 800,
    height: 600,
    scene: [MainScene]
};

var game = new Phaser.Game(config);
