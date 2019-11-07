"use strict";

import { sum, minus, multi, divide, countDigits } from "./lib/operators";
import { createDivWithContent, appendElementToElement } from "./lib/elements";
const firstElement = document.querySelector("[name=first]");
const secondElement = document.querySelector("[name=second]");
const plusButton = document.querySelector(".plus");
const minusButton = document.querySelector(".minus");
const multiButton = document.querySelector(".multi");
const divideButton = document.querySelector(".divide");
const operator = document.querySelector(".operator");
const result = document.querySelector("#result");
const digitCounter = document.querySelector(".digitcounter");

plusButton.addEventListener("click", function() {
  // const sum = parseInt(firstElement.value) + parseInt(secondElement.value);
  const firstNumber = parseInt(firstElement.value);
  const secondNumber = parseInt(secondElement.value);
  let childResult = sum(firstNumber, secondNumber);
  childResult = createDivWithContent(childResult);
  appendElementToElement(result, childResult);
  operator.innerHTML = "+";
  digitCounter.innerHTML = countDigits(sum(firstNumber, secondNumber));
});

minusButton.addEventListener("click", function() {
  const firstNumber = parseInt(firstElement.value);
  const secondNumber = parseInt(secondElement.value);
  let childResult = minus(firstNumber, secondNumber);
  childResult = createDivWithContent(childResult);
  appendElementToElement(result, childResult);
  operator.innerHTML = "-";
  digitCounter.innerHTML = countDigits(minus(firstNumber, secondNumber));
});

multiButton.addEventListener("click", function() {
  const firstNumber = parseInt(firstElement.value);
  const secondNumber = parseInt(secondElement.value);
  let childResult = multi(firstNumber, secondNumber);
  childResult = createDivWithContent(childResult);
  appendElementToElement(result, childResult);
  operator.innerHTML = "x";
  digitCounter.innerHTML = countDigits(multi(firstNumber, secondNumber));
});

divideButton.addEventListener("click", function() {
  const firstNumber = parseInt(firstElement.value);
  const secondNumber = parseInt(secondElement.value);
  let childResult = divide(firstNumber, secondNumber);
  childResult = createDivWithContent(childResult);
  appendElementToElement(result, childResult);
  operator.innerHTML = "/";
  digitCounter.innerHTML = countDigits(divide(firstNumber, secondNumber));
});
