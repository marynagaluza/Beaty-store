import { productsDOM } from '../DOM.js';
import { showProductsFromBasket } from './Basket.js';

const createCardUI = (product) => {
    productsDOM.innerHTML = '';
    productsDOM.innerHTML =
    `<div class="product__card">
    <a class="products__item-link" href="/">Home page</a>
    <div class="card__btn">
    <button class="card__btn-add"><img src="../images/plus_btn.svg" alt="plus"></button>
    <button class="card__btn-delete"><img src="../images/minus_btn.svg" alt="minus"></button>
    </div>
    <div class="product__card-title">${product.title}</div>
    <div class="product__card-description">${product.description}</div>
    <div class="product__card-img">
    <img src="${product.image}" alt="product image"></div>
    <div class="product__card-price">${product.price} $</div>
    </div>`

    let addProduct = document.querySelector('.product__card_add');
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
        let currentProduct = JSON.parse(localStorage.getItem(product.id));
        if (currentProduct.count > 0) {
            localStorage.setItem(product.id, JSON.stringify({count: currentProduct.count-=1, title: product.title}))
        }
        if (currentProduct.count < 1){
            localStorage.removeItem
        }
        showProductsFromBasket()
    })
}

export { createCardUI }