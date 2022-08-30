var config = {
  type: Phaser.AUTO, // automatically tries WebGL, then falls back on Canvas
  width: 800,
  height: 600,
  scene: {
      preload: preload,
      create: create,
      update: update
  }
};

var game = new Phaser.Game(config);

function preload ()
{
  this.load.image('red', )
}

function create ()
{
}

function update ()
{
}