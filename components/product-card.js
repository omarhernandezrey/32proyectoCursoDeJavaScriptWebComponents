class ProductCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    get template() {
        const template = document.createElement('template');
        template.innerHTML = `
        <main>
            <section>
            <img />
            </section>
            <section>
                <div>
                <h2>Hola mundo</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
                <h3>Precio: $100</h3>
                <button>Comprar</button>
                </div>
            </section>
        </main>
        `;

        return template;
    }
    render() {
        this.shadowRoot.appendChild(this.template.content.cloneNode(true));
    }
    connectedCallback() {
        this.render();
    }
}

customElements.define('product-card', ProductCard);
