"use-strict";

class Input {
  constructor() {
    this.upKey = new ButtonState();
    this.downKey = new ButtonState();
    this.leftKey = new ButtonState();
    this.rightKey = new ButtonState();
    this.spaceKey = new ButtonState();

    this.handleKeyUpDown = this.handleKeyUpDown.bind(this);
    this.keyUpDown = this.keyUpDown.bind(this);

    window.addEventListener("keydown", this.handleKeyUpDown);
    window.addEventListener("keyup", this.handleKeyUpDown);
  }

  handleKeyUpDown = function (e) {
    this.keyUpDown(e);
  };

  keyUpDown = function (e) {
    const isKeyDown = e.type === "keydown";

    switch (parseInt(e.keyCode)) {
      case 32:
        this.spaceKey.setState(isKeyDown);
        break;
      case 37:
        this.leftKey.setState(isKeyDown);
        break;
      case 38:
        this.upKey.setState(isKeyDown);
        break;
      case 39:
        this.rightKey.setState(isKeyDown);
        break;
      case 40:
        this.downKey.setState(isKeyDown);
        break;
    }
    console.log(e.keyCode);
  };
}

class ButtonState {
  constructor() {
    this.pressed = false;
    this.setState = function (isPressed) {
      if (isPressed !== this.pressed) {
        this.pressed = isPressed;
      }
    };
  }
}

export default Input;
