import { productsDOM } from '../DOM.js';
import { getBasketCount } from './getBasketCount.js';

const createCardUI = (product) => {
    productsDOM.innerHTML = '';
    productsDOM.innerHTML =
    `<div class="product__card">
    <a class="products__item-link" href="/"><img src="../images/home.svg" alt="Home page">Home page</a>
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


    let addProduct = document.querySelector('.card__btn-add');
    addProduct.addEventListener('click', () => {
        let currentProduct = JSON.parse(localStorage.getItem(product.id));
        if (!currentProduct) {
            let count = 0;
            localStorage.setItem(product.id, JSON.stringify({count: count+=1, image: product.image, price: product.price, title: product.title}))
        } else {
            localStorage.setItem(product.id, JSON.stringify({count: currentProduct.count += 1, image: currentProduct.image, price: currentProduct.price, title: currentProduct.title}))
        }
        getBasketCount();
    })

    let deleteProduct = document.querySelector('.card__btn-delete');
    deleteProduct.addEventListener('click', () => {
        let currentProduct = JSON.parse(localStorage.getItem(product.id));
        if (currentProduct.count > 0) {
            localStorage.setItem(product.id, JSON.stringify({count: currentProduct.count-=1, image: product.image, price: product.price, title: product.title}));
        }
        getBasketCount();
        if (currentProduct.count < 1){
            localStorage.removeItem(product.id);
        }
    })
}

export { createCardUI }