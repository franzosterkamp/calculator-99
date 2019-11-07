import { countDigits } from "./operators";

const operator = document.querySelector(".operator");
const result = document.querySelector("#result");
const digitCounter = document.querySelector(".digitcounter");
let resultFormel = document.querySelector(".result-formel");
const firstElement = document.querySelector("[name=first]");
const secondElement = document.querySelector("[name=second]");
export function createDivWithContent(content) {
  content = content.toString();
  const divElement = document.createElement("div");
  divElement.innerHTML = content;

  return divElement;
}

export function appendElementToElement(parent, child) {
  return parent.appendChild(child);
}

export function handleClick(operatorSign, operatorFunction) {
  const firstNumber = parseInt(firstElement.value);
  const secondNumber = parseInt(secondElement.value);
  let childResult = operatorFunction(firstNumber, secondNumber);
  let childResultFormel = `${firstNumber} ${operatorSign} ${secondNumber} = `;
  childResultFormel = createDivWithContent(childResultFormel);
  childResult = createDivWithContent(childResult);
  appendElementToElement(result, childResult);
  operator.innerHTML = operatorSign;
  appendElementToElement(resultFormel, childResultFormel);
  digitCounter.innerHTML = countDigits(
    operatorFunction(firstNumber, secondNumber)
  );
}
