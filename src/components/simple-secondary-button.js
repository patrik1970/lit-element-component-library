import { LitElement, html, css } from 'lit-element';

class SimpleSecondaryButton extends LitElement {
  static get styles() {
    return css`
        .button {
            height: 60px;
            width: 120px;
            background-color: rgb(245,245,245);
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 18px;
            margin: 4px 2px;
            border-radius: 5px;
            border-style: solid;
            cursor: pointer;
        }
    `;
  }

  static get properties() {
    return { 
      textColor: { type: String }
    };
  }

  render() {
    return html`
      <button @click="${this._handleClick}" value="${this.textColor}" class="button" style="color: ${this.textColor}; border-color: ${this.textColor};">${this.textColor}</button>
    `;
  }

  _handleClick(e) {
    alert('You have cliked on the Button with the textcolor '+ e.target.value +' and bordercolor '+ e.target.value);
  }
}

customElements.define('simple-secondary-button', SimpleSecondaryButton);
