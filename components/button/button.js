class ButtonComponent extends HTMLElement {
  constructor() {
    super(); // always call super() first in the constructor.
  }
  connectedCallback() {
    this.innerHTML = `<button></button>`;
  }
  disconnectedCallback() {
    // code here
  }
  attributeChangedCallback(attrName, oldVal, newVal) {
    // code here
  }

  static get observedAttributes() {
    return ["primary", "secondary"];
  }
}

customElements.define("button-component", ButtonComponent);
