class Ball extends Phaser.Physics.Arcade.Sprite {
  constructor(config) {
    super(config.scene, config.x, config.y, config.texture);
    config.scene.add.existing(this);
    config.scene.physics.add.existing(this);
    this.scene.events.on("update", this.update, this);
    this.setCollideWorldBounds().setBounce(0.8);
  }

  update() {
    if (ball.body.velocity.x < -1) {
      ball.body.velocity.x++;
    } else if (ball.body.velocity.x > 1) {
      ball.body.velocity.x--;
    } else if (ball.body.velocity.y < -1) {
      ball.body.velocity.y++;
    } else if (ball.body.velocity.y > 1) {
      ball.body.velocity.y--;
    } else {
      ball.setVelocityX(0);
      ball.setVelocityY(0);
      ball.anims.play("stopBall", true);
    }
  }
}

export default Ball;
