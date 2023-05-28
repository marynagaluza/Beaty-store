import { productsDOM } from '../DOM.js';

const showProductsFromBasket = () => {
    productsDOM.innerHTML = '';
    for (let i = 0; i < localStorage.length; i++) {
        let id = localStorage.key(i);
        let productData = JSON.parse(localStorage.getItem(id));
        productsDOM.innerHTML += `<div><div>
        <span>${productData.title}</span>
        <span>Count ${productData.count}</span>
        </div></div>`
    }
}

export { showProductsFromBasket }