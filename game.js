var config = {
  type: Phaser.AUTO, // automatically tries WebGL, then falls back on Canvas
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 300 },
      debug: false
    }
  },
  scene: {
      preload: preload,
      create: create,
      update: update
  }
};

var game = new Phaser.Game(config);

function preload ()
{
  this.load.image('red', "assets/red.png");
  this.load.image('yellow', "assets/yellow.png");
  this.load.image('green', "assets/green.png");
  this.load.spritesheet('wizards', "assets/wizards.png", {
    frameWidth: 32,
    frameHeight: 48
  })
}

function create ()
{
  this.add.image(150, 300, 'red').setScale(.5)
  this.add.image(400, 300, 'yellow').setScale(.5)
  this.add.image(650, 300, 'green').setScale(.5)
  // .refreshBody();
  
  playerBlue = this.physics.add.sprite(650, 300, 'wizards').setScale(4)
  playerBlue.setBounce(0.2);
  playerBlue.setCollideWorldBounds(true);

  this.anims.create({
    key: 'right',
    frames: this.anims.generateFrameNumbers('wizards', { start: 0, end: 3 }),
    frameRate: 10,
    repeat: -1
  });

  cursors = this.input.keyboard.createCursorKeys();
}

function update ()
{
  if (cursors.right.isDown) {   
    playerBlue.setVelocityX(150)
    playerBlue.anims.play('right', true);
  } else if (cursors.left.isDown) {
    playerBlue.setVelocityX(-150)
    playerBlue.anims.play('left', true);
  } else {
      playerBlue.setVelocityX(0);      
  }

  if (cursors.up.isDown)
{
    playerBlue.setVelocityY(-330);
}
}