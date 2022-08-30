import Phaser from "phaser"
import Game from "./scenes/game"

const config = {
  type: Phaser.AUTO, // automatically tries WebGL, then falls back on Canvas
  width: 800,
  height: 600,
  scene: [Game],
  physics: {
    default: 'arcade',
    arcade: {      
      debug: false
    }
  }
};

const game = new Phaser.Game(config);