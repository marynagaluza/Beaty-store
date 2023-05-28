import { productsDOM, addProduct, deleteProduct } from '../DOM.js';
import { showProductsFromBasket } from './Basket.js';

const createCardUI = (product) => {
    productsDOM.innerHTML = '';
    productsDOM.innerHTML =
    `<div class="product__card">
    <div class="product__card-title">${product.title}</div>
    <div class="product__card-description">${product.description}</div>
    <div class="product__card-image" alt="product image">${product.image}</div>
    <div class="product__card-price">${product.price} $</div>
    <div class="product__card_add">+</div>
    <div class="product__card_delete">-</div>
    </div>`
}

let addProduct = document.querySelector('.product__card_add');
let currentProduct = JSON.parse(localStorage.getItem(product.id));

addProduct.addEventListener('click', () => {
    if (!currentProduct) {
        localStorage.setItem(product.id, JSON.stringify({count: count-=1, title: product.title}))
        count = 0;
    } else {
        localStorage.setItem(product.id, JSON.stringify({count: currentProduct.count += 1, title: currentProduct.title}))
    }
    showProductsFromBasket()
})

let deleteProduct = document.querySelector('.product__card_delete');
deleteProduct.addEventListener('click', () => {

    if (currentProduct.count > 0) {
        localStorage.setItem(product.id, JSON.stringify({count: currentProduct.count-=1, title: product.title}))
    }
    if (currentProduct.count < 1){
        localStorage.removeItem
    }
    showProductsFromBasket()
})

export { createCardUI }