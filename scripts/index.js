import { getProducts } from './components/Products.js';
import { getCategories } from './components/Categories.js';
import { getProductsByCategory } from './components/ProductsBy.js';
import { selectDOM, basket } from './DOM.js';
import { router } from "./components/Router.js";
import { getProductById } from './components/getOneProduct.js';
import { showProductsFromBasket } from './components/Basket.js';
import { getBasketCount } from './components/getBasketCount.js';

document.addEventListener('DOMContentLoaded', function() {
    getProducts();
    getCategories();
    getBasketCount();

    basket.addEventListener('click', () => showProductsFromBasket());
})

window.addEventListener('unload', function () {
    localStorage.clear();
})

selectDOM.addEventListener('change', function() {
    if (selectDOM.value === 'all') { 
        products.getProducts()
    }   else {
        getProductsByCategory(selectDOM.value)
    }
})

router.add(/card\/(.*)/, (id) => {
    getProductById(id);
})