// Very important to ensure any elements we test are loaded
import '../src/components/simple-button.js';

describe('simple-button', () => {
  let node;

  beforeEach(async () => {
    // Use createElement to test it is registered correctly
    node = document.createElement('simple-button');

    // Connect to DOM in case there's any `connectedCallback` logic
    document.body.appendChild(node);

    // Wait for initial render
    await node.updateComplete;
  });

  afterEach(() => {
    // Remove from DOM, cleanup
    node.remove();
  });

  it('should render', () => {
    let button = node.shadowRoot.querySelector('button');
    expect(button.textContent).toContain('#ffffff', 'button renders');
    expect(button).not.toBe('undefined', 'button renders not');
  });
});