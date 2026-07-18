const GAME_WIDTH = 960;
const GAME_HEIGHT = 600;
const TILE_SIZE = 32;

const GAME_CONFIG = {
    type: Phaser.AUTO,
    parent: 'phaser-game',
    width: GAME_WIDTH,
    height: GAME_HEIGHT,
    backgroundColor: '#0a0a1a',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 600 },
            debug: false
        }
    },
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    }
};
