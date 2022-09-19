export class Events {
  click(selector, action) {
    document.querySelector(selector).addEventListener("click", action);
  }
}
