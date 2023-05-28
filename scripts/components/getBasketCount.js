import { productsCount } from "../DOM.js";

const getBasketCount = () => {
    let sumProductsInBasket = 0;
        for (let i = 0; 0<localStorage.length; i++) {
        let key = localStorage.key(i);
        let productObj = JSON.parse(localStorage.getItem(key))
        sumProductsInBasket += +productObj.count
        productsCount.innerHTML = sumProductsInBasket
    }
}

export { getBasketCount }