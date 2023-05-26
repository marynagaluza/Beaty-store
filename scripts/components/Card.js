import { productsDOM } from "../DOM.js";

class CardUI {
    createCardUI (product) {
        productsDOM.innerHTML = ''
        productsDOM.innerHTML =
        `<div class="product__card">
        <div class="product__title">${product.title}</div>
        <div class="product__description">${product.description}</div>
        <div class="product__image" alt="product image">${product.image}</div>
        <div class="product__price">${product.price} $</div>
        </div>`
    }
}

let cardUI = new CardUI()

export { cardUI }