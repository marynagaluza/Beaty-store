import { productsDOM } from '../DOM.js'
import { getProductById } from './getOneProduct.js';

const createUI = (data) => {
productsDOM.innerHTML = '';
data.forEach(item => {
    productsDOM.innerHTML +=
        `<article class="products__item" id="${item.id}">
        <div class="products__item-img">
            <img src="${item.image}" alt="product item">
        </div>
        <div class="products__item-info">
            <p class="products__item-price">${item.price} $</p>
            <p class="products__item-title">${item.title}</p>
        </div>
        <a class="products__item-link" href="#/card/${item.id}">Show more</a>
        </article>`
    })
}

export { createUI }