"use strict";

import { sum, minus, multi, divide } from "./lib/operators";
import { handleClick } from "./lib/elements";

const plusButton = document.querySelector(".plus");
const minusButton = document.querySelector(".minus");
const multiButton = document.querySelector(".multi");
const divideButton = document.querySelector(".divide");

minusButton.addEventListener("click", function() {
  handleClick("-", minus);
});

multiButton.addEventListener("click", function() {
  handleClick("x", multi);
});

divideButton.addEventListener("click", function() {
  handleClick("/", divide);
});

plusButton.addEventListener("click", function() {
  handleClick("+", sum);
});
