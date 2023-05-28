import { getProducts } from './components/Products.js';
import { getCategories } from './components/Categories.js';
import { createCardUI } from './components/Card.js';
import { productsByCategory } from './components/ProductsBy.js';
import { selectDOM, productsCount, oneProductLink } from './DOM.js';
import { router } from "./components/Router.js";
import { getProductById } from './components/getOneProduct.js';
import { showProductsFromBasket } from './components/Basket.js';
import { getBasketCount } from './components/getBasketCount.js';

document.addEventListener('DOMContentLoaded', function() {
    getProducts();
    getCategories();
    getBasketCount();
    productsCount.addEventListener('click', () => {
    showProductsFromBasket();
    });
    if (localStorage.length) {
        getBasketCount();
    }
    showProductsFromBasket();
})

selectDOM.addEventListener('change', function() {
    if (selectDOM.value === 'all') { 
        products.getProducts()
    }   else {
        productsByCategory.getProductsByCategory(selectDOM.value)
    }
})

// oneProductLink.forEach(oneProduct => {
//     oneProduct.addEventListener('click', () => {
//         createCardUI();
//     })}
// )


router.add(/card\/(.*)/, (id) => {
    getProductById(id);
})