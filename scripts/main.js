import Display from "./display.js";
import Input from "./input.js";

const canvas = document.querySelector("canvas");
const input = new Input();
const display = new Display(canvas);

display.renderColor("lightpink");
display.render();

input.leftKey.setState(true);
