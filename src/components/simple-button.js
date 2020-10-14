import { LitElement, html, css } from 'lit-element';

const primaryColor = css`blue`;
const secondaryColor = css`red`;
const thirdColor = css`green`;
const fourthColor = css`black`;



class SimpleButton extends LitElement {
  static get styles() {
    return css`
        .first { color: ${primaryColor} }
        .second { color: ${secondaryColor} }
        .button {
            border: none;
            color: white;
            padding: 15px 32px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;
            margin: 4px 2px;
            cursor: pointer;
        }
        .button1 {background-color: ${primaryColor}} /* Blue */
        .button2 {background-color: ${secondaryColor}} /* Red */
        .button3 {background-color: ${thirdColor}} /* Green */
        .button4 {background-color: ${fourthColor}} /* Black */ 

        .button-group {

        }
    `;
  }
  render() {
    return html`
        <div class="first">Primary text color</div>
        <div class="second">Secondary text color</div>

        <h1>Some Simple Buttons</h1>
        <p>This is some simple buttons</p>
        <div class="button-group">
            <button @click="${this._handleClick}" value="Button 1" class="button button1" >Blue</button>
            <button @click="${this._handleClick}" value="Button 2" class="button button2">Red</button>
            <button class="button button3">Green</button>
            <button class="button button4">Black</button>
        <div>
    `;
  }

  _handleClick(e) {
    console.log('I am cliked on the Button with color:', e.target.value);   
  }
}

customElements.define('simple-button', SimpleButton);
