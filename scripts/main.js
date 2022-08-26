import Display from "./display.js";
import Engine from "./engine.js";
import Input from "./input.js";

var counter = 0;
function update(timestamp) {
  counter++;
}

function render() {}

const canvas = document.querySelector("canvas");
const input = new Input();
const display = new Display(canvas);
const engine = new Engine(40, update, render);

engine.start();

display.renderColor("lightpink");
display.render();
