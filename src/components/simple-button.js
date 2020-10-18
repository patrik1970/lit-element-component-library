import { LitElement, html, css } from 'lit-element';

class SimpleButton extends LitElement {
  static get styles() {
    return css`
        .button {
            height: 60px;
            width: 200px;
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
      backgroundColor: { type: String },
      textColor: { type: String },
	  borderColor: { type: String },
	  linkLocation: { type: String },
    };
  }

  constructor() {
    super();
    this.backgroundColor = 'rgb(245,245,245)';
    this.textColor = 'rgb(245,245,245)';
	this.borderColor = 'rgb(245,245,245)';
	this.linkLocation = '#';
  }

  render() {
    return html`
      <button @click="${this._handleClick}" class="button" style="
      	background-color: ${this.backgroundColor};
      	color: ${this.textColor};
      	border-color: ${this.borderColor};
      ">${this.borderColor}</button
    `;
  }

  _handleClick(e) {
	let x = this.linkLocation;
	location.href = x;
  }
}

customElements.define('simple-button', SimpleButton);