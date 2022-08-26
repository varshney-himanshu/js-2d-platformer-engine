class Game {
  constructor() {
    this.color = "rgb(0,0,0)";
    this.update = this.update.bind(this);
  }

  update = function () {
    this.color = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(
      Math.random() * 255
    )}, ${Math.floor(Math.random() * 255)})`;

    console.log(this.color);
  };
}

export default Game;
