import { LitElement, html } from 'lit-element'; 

class MyComponent extends LitElement { 
  render() {
    return html` 
      <p>My first component</p>
    `;
  }
}

customElements.define('my-component', MyComponent);