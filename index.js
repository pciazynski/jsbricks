let platforms;
let player;

function preload() {
  this.load.image('sky', 'assets/sky.png');
  this.load.image('brick1', 'assets/brick1.png');
  this.load.image('brick2', 'assets/brick2.png');
  this.load.image('bomb', 'assets/bomb.png');
}

function create() {
  this.add.image(400, 300, 'sky');

  platforms = this.physics.add.staticGroup();

  platforms.create(600, 400, 'brick2');
  platforms.create(50, 250, 'brick2');
  platforms.create(750, 220, 'brick2');

  platforms.create(50, 50, 'brick2');
  platforms.create(150, 150, 'brick2');
  platforms.create(455, 100, 'brick2');

  player = this.physics.add.sprite(100, 550, 'brick1');
  player.body.setAllowGravity(false);
}

function update() {
}

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: {
    preload,
    create,
    update,
  },
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 300 },
      debug: false,
    },
  },
};

// eslint-disable-next-line no-unused-vars
const game = new Phaser.Game(config);
