class Engine {
  constructor(frameRate, update, render) {
    if (typeof frameRate !== "number") {
      throw new Error("frameRate must be a number!");
    }

    if (typeof update !== "function") {
      throw new Error("Update is not a function!");
    }

    if (typeof render !== "function") {
      throw new Error("Render is not a function!");
    }

    this.updated = false; // to check whether or not update function was called since last frame cycle

    this.update = update;
    this.render = render;
    this.timeSinceOrigin = window.performance.now();
    this.timeStep = 1000 / frameRate; // desired time difference between each frames;
    this.elapsedTime = 0; // total time elapsed since last update

    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this.run = this.run.bind(this);

    this.animationFrameRequest = null;
  }

  /**
   * execulte single cycle of game loop
   *
   * @author Himanshu Varshney
   * @param {number} timeStamp DOMHighResTimeStamp at point in time when requestAnimationFrame() starts to execute this function.
   */

  run = function (timeStamp) {
    this.elapsedTime += timeStamp - this.timeSinceOrigin;
    this.timeSinceOrigin = timeStamp;

    if (this.elapsedTime >= this.timeStep * 3) {
      this.elapsedTime = this.timeStep;
    }

    while (this.elapsedTime >= this.timeStep) {
      this.elapsedTime -= this.timeStep;
      this.update(timeStamp);
      this.updated = true;
    }

    if (this.updated) {
      this.updated = false;
      this.render(timeStamp);
    }

    this.animationFrameRequest = window.requestAnimationFrame(this.run);
  };

  /**
   * Starts the engine's game loop
   *
   * @author Himanshu Varshney
   */
  start = function () {
    this.elapsedTime = this.timeStep;
    this.timeSinceOrigin = window.performance.now();
    this.animationFrameRequest = window.requestAnimationFrame(this.run);
  };

  /**
   * Stops the engine's game loop
   *
   * @author Himanshu Varshney
   */
  stop = function () {
    window.cancelAnimationFrame(this.animationFrameRequest);
  };
}

export default Engine;
