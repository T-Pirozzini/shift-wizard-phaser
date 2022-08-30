

class Scene1 extends Phaser.Scene {
  constructor() {
    super('bootGame')
  }   
  
  preload() {
    this.load.image('red', "assets/red.png");
    this.load.image('yellow', "assets/yellow.png");
    this.load.image('green', "assets/green.png");
    this.load.image('wild', "assets/wild.png");
    this.load.image('duel', "assets/duel.png");
    this.load.image('shield', "assets/shield.png");
    this.load.image('trap', "assets/trap.png");
    this.load.image('power', "assets/power.png");
  }

  
  create() {
    this.dealText = this.add.text(75, 350, ['DEAL CARDS']).setFontSize(18).setFontFamily('Trebuchet MS').setColor('#00ffff').setInteractive();

    let self = this;

		this.card = this.add.image(300, 300, 'power').setScale(0.3, 0.3).setInteractive();
        this.input.setDraggable(this.card);
		this.card = this.add.image(300, 300, 'shield').setScale(0.3, 0.3).setInteractive();
        this.input.setDraggable(this.card);
        
    class Card {
      constructor(scene) {
          this.render = (x, y, sprite) => {
              let card = scene.add.image(x, y, sprite).setScale(0.3, 0.3).setInteractive();
              scene.input.setDraggable(card);
              return card;
          }
      }
    }
    
		this.dealCards = () => {
      for (let i = 0; i < 5; i++) {
        let playerCard = new Card(this);
        playerCard.render(475 + (i * 100), 650, 'shield');
      }

    }

		this.dealText.on('pointerdown', function () {
            self.dealCards();
        })

        this.dealText.on('pointerover', function () {
            self.dealText.setColor('#ff69b4');
        })

        this.dealText.on('pointerout', function () {
            self.dealText.setColor('#00ffff');
        })

        this.input.on('drag', function (pointer, gameObject, dragX, dragY) {
            gameObject.x = dragX;
            gameObject.y = dragY;
        })
  }

}

// function preload ()
// {
  
//   this.load.spritesheet('wizards', "assets/wizards.png", {
//     frameWidth: 32,
//     frameHeight: 48
//   })
//   let cards = [red, yellow, green]
//   shuffleDeck(cards);
// }

// const shuffleDeck = (cards) => {
//   for (let i = cards.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [cards[i], cards[j]] = [cards[j], cards[i]];

//     console.log(cards)
// }
//   // let randomCards = Math.random(cards)
//   // console.log(randomCards)
// }

// function create ()
// {
//   this.add.image(150, 300, 'red').setScale(.5)
//   this.add.image(400, 300, 'yellow').setScale(.5)
//   this.add.image(650, 300, 'green').setScale(.5)
//   // .refreshBody();
  
//   playerBlue = this.physics.add.sprite(650, 300, 'wizards').setScale(4)
//   playerBlue.setBounce(0.2);
//   playerBlue.setCollideWorldBounds(true);

//   this.anims.create({
//     key: 'right',
//     frames: this.anims.generateFrameNumbers('wizards', { start: 0, end: 3 }),
//     frameRate: 10,
//     repeat: -1
//   });

//   cursors = this.input.keyboard.createCursorKeys();

  
// }

// function update ()
// {
//   if (cursors.right.isDown) {   
//     playerBlue.setVelocityX(150)
//     playerBlue.anims.play('right', true);
//   } else if (cursors.left.isDown) {
//     playerBlue.setVelocityX(-150)
//     playerBlue.anims.play('left', true);
//   } else {
//       playerBlue.setVelocityX(0);      
//   }

//   if (cursors.up.isDown)
// {
//     playerBlue.setVelocityY(-330);
// }
// }