const firstElement = document.querySelector("[name=first]");
const secondElement = document.querySelector("[name=second]");
const submitButton = document.querySelector(".submit");

alert("hallo");

submitButton.addEventListener("click", function() {
  const sum = parseInt(firstElement.value) + parseInt(secondElement.value);
  alert(sum);
});
