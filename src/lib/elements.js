export function createDivWithContent(content) {
  content = content.toString();
  let divElement = document.createElement("div");
  divElement.innerHTML = content;

  return divElement;
}

export function appendElementToElement(parent, child) {
  return parent.appendChild(child);
}
