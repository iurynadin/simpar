class ButtonGhsotElement extends HTMLElement {
    constructor() {
        super(); 
    }
    connectedCallback() {
        this.innerHTML = `
            <div class="relative flex justify-end">
                <a href="${this.getAttribute('link')}" class="group btn-ghost">
                    <span class="group-hover:text-azul text-[11px] uppercase">${this.getAttribute('label')}</span>
                    <svg class="group-hover:fill-azul-light" width="144" height="32" viewBox="0 0 144 32">
                        <g clip-path="url(#a)"><path d="M133.926,2.442A6.822,6.822,0,0,0,131.115.589v0a6.251,6.251,0,0,0-2.05-.341L118.4.3,72.815.251H.256V18.237L.251,18.7,10.375,29.857a6.822,6.822,0,0,0,2.811,1.854v0a6.251,6.251,0,0,0,2.05.341L25.9,32l45.584.047v0h72.559V14.062l.005-.462Z" transform="translate(-0.15 -0.15)" stroke="#0FACE4" stroke-miterlimit="10" stroke-width="2"/></g>
                    </svg>
                </a>
            </div>
        `;
    }
}
window.customElements.define('wc-btnghost', ButtonGhsotElement);