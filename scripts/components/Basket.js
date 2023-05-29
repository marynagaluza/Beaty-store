import { productsDOM } from '../DOM.js';

const showProductsFromBasket = () => {
    productsDOM.innerHTML = '';
    for (let i = 0; i < localStorage.length; i++) {
        let id = localStorage.key(i);
        let product = JSON.parse(localStorage.getItem(id));
        productsDOM.innerHTML += `<div><div>
        <span>${product.title}</span>
        <span>Count ${product.count}</span>
        </div></div>`
    }
}

export { showProductsFromBasket }