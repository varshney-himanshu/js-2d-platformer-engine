"use-strict";
const MARGIN = 32;
class Display {
  constructor(canvas) {
    this.buffer = document.createElement("canvas").getContext("2d");
    this.context = canvas.getContext("2d");

    this.renderColor = this.renderColor.bind(this);
    this.handleResize = this.handleResize.bind(this);
    this.render = this.render.bind(this);
    window.addEventListener("resize", this.handleResize);
  }

  render = function () {
    this.context.drawImage(
      this.buffer.canvas,
      0,
      0,
      this.buffer.canvas.width,
      this.buffer.canvas.height,
      0,
      0,
      this.context.canvas.width,
      this.context.canvas.height
    );
  };

  renderColor = function (color) {
    this.buffer.fillStyle = color;
    this.buffer.fillRect(
      0,
      0,
      this.buffer.canvas.width,
      this.buffer.canvas.height
    );
  };

  handleResize = function (e) {
    let height = document.documentElement.clientHeight;
    let width = document.documentElement.clientWidth;

    this.context.canvas.height = height - MARGIN;
    this.context.canvas.width = width - MARGIN;

    this.render();
  };
}

export default Display;
