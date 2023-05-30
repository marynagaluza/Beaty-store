import { productsDOM } from '../DOM.js';

const showProductsFromBasket = () => {
    productsDOM.innerHTML = '';
    for (let i = 0; i < localStorage.length; i++) {
        let id = localStorage.key(i);
        let item = JSON.parse(localStorage.getItem(id));
        productsDOM.innerHTML +=
        `<article class="products__item" id="${id}">
        <div class="products__item-img">
            <img src="${item.image}" alt="product item">
        </div>
        <div class="products__item-info">
            <p class="products__item-price">Price: ${item.price} $</p>
            <p class="products__item-count">Count: ${item.count}</p>
            <p class="products__item-title">${item.title}</p>
        </div>
        <a class="products__item-link" href="#/card/${id}">Show more</a>
        </article>`
    }
}

export { showProductsFromBasket }