"use strict";

import { sum, minus, multi, divide } from "./lib/operators";

const firstElement = document.querySelector("[name=first]");
const secondElement = document.querySelector("[name=second]");
const plusButton = document.querySelector(".plus");
const minusButton = document.querySelector(".minus");
const multiButton = document.querySelector(".multi");
const divideButton = document.querySelector(".divide");
const operator = document.querySelector(".operator");
// const result = document.getElementById("result");
const result = document.querySelector("#result");

plusButton.addEventListener("click", function() {
  // const sum = parseInt(firstElement.value) + parseInt(secondElement.value);
  const firstNumber = parseInt(firstElement.value);
  const secondNumber = parseInt(secondElement.value);
  result.innerHTML = sum(firstNumber, secondNumber);
  operator.innerHTML = "+";
});

minusButton.addEventListener("click", function() {
  const firstNumber = parseInt(firstElement.value);
  const secondNumber = parseInt(secondElement.value);
  result.innerHTML = minus(firstNumber, secondNumber);
  operator.innerHTML = "-";
});

multiButton.addEventListener("click", function() {
  const firstNumber = parseInt(firstElement.value);
  const secondNumber = parseInt(secondElement.value);
  result.innerHTML = multi(firstNumber, secondNumber);
  operator.innerHTML = "x";
});

divideButton.addEventListener("click", function() {
  const firstNumber = parseInt(firstElement.value);
  const secondNumber = parseInt(secondElement.value);
  result.innerHTML = divide(firstNumber, secondNumber);
  operator.innerHTML = "/";
});
