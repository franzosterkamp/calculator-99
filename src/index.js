const firstElement = document.querySelector("[name=first]");
const secondElement = document.querySelector("[name=second]");
const plusButton = document.querySelector(".plus");
const minusButton = document.querySelector(".minus");
const multiButton = document.querySelector(".multi");
const divideButton = document.querySelector(".divide");

plusButton.addEventListener("click", function() {
  const sum = parseInt(firstElement.value) + parseInt(secondElement.value);
  alert(sum);
});

minusButton.addEventListener("click", function() {
  const sum = parseInt(firstElement.value) - parseInt(secondElement.value);
  alert(sum);
});

multiButton.addEventListener("click", function() {
  const sum = parseInt(firstElement.value) * parseInt(secondElement.value);
  alert(sum);
});

divideButton.addEventListener("click", function() {
  const sum = parseInt(firstElement.value) / parseInt(secondElement.value);
  alert(sum);
});
