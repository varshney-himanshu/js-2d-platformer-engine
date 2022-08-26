import Display from "./display.js";
import Engine from "./engine.js";
import Input from "./input.js";

var counter = 0;

let xPos = 0;

const div = document.getElementById("div-test");
function update(deltaTime) {
  //   console.log(deltaTime);
  xPos += 20 * deltaTime * 10;
  div.style = `width: 100px; height: 100px; background-color: aqua; transform: translateX(${xPos}px)`;
}
setTimeout(() => {
  console.log(counter);
}, 1000);

function render() {}

const canvas = document.querySelector("canvas");
const input = new Input();
const display = new Display(canvas);
const engine = new Engine(60, update, render); // setting frame / sec to 60

engine.start();

display.renderColor("lightpink");
display.render();
