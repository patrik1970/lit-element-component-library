import { LitElement, html, css } from 'lit-element';

class SimplePrimaryButton extends LitElement {
  static get styles() {
    return css`
        .button {
          	height: 60px;
          	width: 120px;
        	border: none;
            color: white;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 18px;
            margin: 4px 2px;
            border-radius: 5px;
            cursor: pointer;
        }
    `;
  }

  static get properties() {
    return { 
      buttonColor: { type: String }
    };
  }

  render() {
    return html`
      <button @click="${this._handleClick}" value="${this.buttonColor}" class="button" style="background-color: ${this.buttonColor}">${this.buttonColor}</button
    `;
  }

  _handleClick(e) {
    alert('You have cliked on the Button with the color: '+ e.target.value);   
  }
}

customElements.define('simple-primary-button', SimplePrimaryButton);
