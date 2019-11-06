export function createDivWithContent(content) {
  let divElement = document.createElement("li");
  divElement.innerHTML = content;

  return divElement;
}

export function appendElementToElement(parent, child) {
  return parent.appendChild(child);
}
