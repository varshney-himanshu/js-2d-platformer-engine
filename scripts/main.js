import Display from "./display.js";
import Engine from "./engine.js";
import Game from "./game.js";
import Input from "./input.js";

function update(deltaTime) {
  game.update();
}

function render() {
  display.renderColor(game.color);
  display.render();
}

const canvas = document.querySelector("canvas");
const input = new Input();
const game = new Game();
const display = new Display(canvas);
const engine = new Engine(60, update, render); // setting frame / sec to 60

engine.start();
