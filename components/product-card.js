class productCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this._img = "";
    this._title = "";
    this._price = "";
    this._description = "";
    this._collection = "";
  }
  static get observedAttributes() {
    return ["img", "title", "price", "description", "collection"];
  }
  attributeChangedCallback(attr, oldVal, newVal) {
    if (attr === "img") {
      this._img = newVal;
    }
    if (attr === "title") {
      this._title = newVal;
    }
    if (attr === "price") {
      this._price = newVal;
    }
    if (attr === "description") {
      this._description = newVal;
    }
    if (attr === "collection") {
      this._collection = newVal;
    }
    // Re-renderizar solo si el elemento ya está conectado al DOM
    if (this.shadowRoot && this.shadowRoot.innerHTML) {
      this.render();
    }
  }
  getTemplate() {
    const template = document.createElement("template");
    template.innerHTML = `
      <main class="container">
        <section class="imgBox">
          <img src="${
            this._img || ""
          }" alt="Zapatos deportivos para correr color azul"/>
        </section>
        <section class="details">
          <div class="content">
            <h2>${this._title || ""} <span>${this._collection || ""}</span></h2>
            <p>${this._description || ""}</p>
            <h3>${this._price || ""}</h3>
            <button>Comprar</button>
          </div>
        </section>
      </main>
      ${this.getStyles()}
    `;
    return template;
  }
  getStyles() {
    return `
      <style>
      :host {
        --primary-background: #5a6cb2;
          width: 80%;
          max-width: 900px;
          min-width: 280px;
          margin: 0 auto;
      }
      .container {
          position: relative;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          width: 900px;
          height: 600px;
          margin: 20px;
          background-color: #fff;
      }
      .container .imgBox {
          position: relative;
          display: flex;
          justify-content: center;
          width: 50%;
          height: 100%;
          background-color: var(--primary-background)
      }
      .container .imgBox:before {
          position: absolute;
          top: 20px;
          left: 20px;
          font-size: 8em;
          font-weight: 800;
          color: #000;
          content: 'Nike';
          opacity: 0.1;
      }
      .container .imgBox img {
          position: relative;
          top: 190px;
          left: -80px;
          width: 720px;
          height: 480px;
          transform: rotate(-30deg);
          transition: transform 0.3s ease;
          cursor: pointer;
      }
      .container .imgBox img:hover {
          transform: rotate(-30deg) scale(1.1);
      }
      .container .details {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 50%;
          height: 100%;
          box-sizing: border-box;
          padding: 40px;

      }
      .container .details h2 {
          margin-bottom: 25px;
          font-size: 2.5em;
          line-height: 0.8em;
          color: #444;
      }
      .container .details h2 span {
          font-size: 0.4em;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: #999;
      }
      .container .details p {
          max-width: 85%;
          margin-left: 15%;
          margin-bottom: 35px;
          color: #333;
          font-size: 15px;
      }
      .container .details h3 {
          float: left;
          font-size: 2.5em;
          color: #a2a2a2;
      }
      .container .details button {
          margin-top: 35px;
          float: right;
          padding: 15px 20px;
          font-size: 16px;
          color: #fff;
          letter-spacing: 1px;
          font-weight: 600;
          text-transform: uppercase;
          border-radius: 40px;
          background-color: #5a6cb2;
          cursor: pointer;
      }
      @media (max-width: 1080px) {
          .container {
              height: auto;
              width: auto;
          }
          .container .imgBox {
              padding: 40px;
              width: 100%;
              box-sizing: border-box;
              height: auto;
              text-align: center;
          }
          .container .imgBox img {
              top: 0;
              left: initial;
              width: 100%;
              height: auto;
              transform: rotate(0deg);
              transition: transform 0.3s ease;
              cursor: pointer;
          }
          .container .imgBox img:hover {
              transform: rotate(0deg) scale(1.1);
          }

          .container .details {
              width: 100%;
              height: auto;
              padding: 20px;
          }

          .container .details p {
              max-width: 100%;
              margin-left: 0;
          }
      }
      
      @media (max-width: 768px) {
          :host {
              width: 95%;
              margin: 10px auto;
          }
          
          .container {
              margin: 10px;
              box-shadow: 0 4px 8px rgba(0,0,0,0.1);
              border-radius: 15px;
              overflow: hidden;
          }
          
          .container .imgBox {
              padding: 20px;
              min-height: 250px;
          }
          
          .container .imgBox:before {
              font-size: 4em;
              top: 10px;
              left: 10px;
          }
          
          .container .details {
              padding: 25px 20px;
          }
          
          .container .details h2 {
              font-size: 1.8em;
              margin-bottom: 15px;
              text-align: center;
              line-height: 1.1em;
          }
          
          .container .details h2 span {
              font-size: 0.5em;
              display: block;
              margin-top: 5px;
          }
          
          .container .details p {
              font-size: 14px;
              line-height: 1.5;
              margin-bottom: 20px;
              text-align: center;
          }
          
          .container .details h3 {
              float: none;
              text-align: center;
              font-size: 2em;
              margin-bottom: 20px;
          }
          
          .container .details button {
              float: none;
              display: block;
              width: 100%;
              margin-top: 20px;
              padding: 18px 20px;
              font-size: 16px;
              border-radius: 50px;
          }
      }
      </style>
    `;
  }
  render() {
    // Limpiar el contenido anterior
    this.shadowRoot.innerHTML = "";
    this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
  }
  connectedCallback() {
    this.render();
  }
}
customElements.define("product-card", productCard);