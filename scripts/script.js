import { products } from "./components/Products.js";
import { categories } from "./components/Categories.js";
import { productsByCategory } from "./components/ProductsBy.js";
import { selectDOM } from "./DOM.js";
import Router from "./components/Router.js";
import { getProductById } from "./components/GetProduct.js";

document.addEventListener('DOMContentLoaded', function() {
    products.getProducts()
    categories.getCategories()
})

selectDOM.addEventListener('change', function() {
    if (selectDOM.value === 'all') { 
        products.getProducts()
    }   else {
        productsByCategory.getProductsByCategory(selectDOM.value)
    }
})

const router = new Router()

router.add(/card\/(.*)/, (id) => {getProductById.getProductById(id)})