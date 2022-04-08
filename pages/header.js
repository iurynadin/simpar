
const template = document.createElement('template');
template.innerHTML = `
    <style>
    
    </style>

    <div className="header-container w-full bg-red-600 h-4 block">
        header component
    </div>
`;

class Header extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
}

window.customElements.define('header-component', Header);