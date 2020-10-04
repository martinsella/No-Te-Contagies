class selector extends Phaser.Scene {
  constructor() {
    super("selector");
  }

  create() {
    this.add
      .image(400, 300, "selector")
      .setInteractive()
      .on("pointerover", () => iobject.destroy());

    this.add
      .image(189, 284, "blevel1")
      .setInteractive()
      .on("pointerdown", () => {
        if (nivel != 1) {
          nivel = 1;
        }
        track.pause();
        this.scene.start("gameplay");
      });

    this.add
      .image(132, 131, "bback")
      .setInteractive()
      .on("pointerdown", () => this.scene.start("main"));

    if (nivsup == 0) {
      this.add.image(328, 284, "blocked");
      this.add.image(465, 284, "blocked");
      this.add
        .image(603, 284, "bpvplocked")
        .setInteractive()
        .on("pointerover", () => iobject = this.add.image(603, 284, "ipvp"));
    } else if (nivsup == 1) {
      this.add.image(465, 284, "blocked");
      this.add
        .image(603, 284, "bpvplocked")
        .setInteractive()
        .on("pointerover", () => iobject = this.add.image(603, 284, "ipvp"));
      this.add
        .image(328, 284, "blevel2")
        .setInteractive()
        .on("pointerdown", () => {
          if (nivel != 2) {
            nivel = 2;
          }
          track.pause();
          this.scene.start("gameplay");
        });
    } else if (nivsup == 2) {
      this.add
        .image(603, 284, "bpvplocked")
        .setInteractive()
        .on("pointerover", () => iobject = this.add.image(603, 284, "ipvp"));
      this.add
        .image(328, 284, "blevel2")
        .setInteractive()
        .on("pointerdown", () => {
          if (nivel != 2) {
            nivel = 2;
          }
        });
      track.pause();
      this.scene.start("gameplay");
      this.add
        .image(465, 284, "blevel3")
        .setInteractive()
        .on("pointerdown", () => {
          if (nivel != 3) {
            nivel = 3;
          }
          track.pause();
          this.scene.start("gameplay");
        });
    } else {
      this.add.image(603, 284, "bpvp");
      this.add
        .image(328, 284, "blevel2")
        .setInteractive()
        .on("pointerdown", () => {
          if (nivel != 2) {
            nivel = 2;
          }
        });
      track.pause();
      this.scene.start("gameplay");
      this.add
        .image(465, 284, "blevel3")
        .setInteractive()
        .on("pointerdown", () => {
          if (nivel != 3) {
            nivel = 3;
          }
          track.pause();
          this.scene.start("gameplay");
        });
    }
  }
}

export default selector;