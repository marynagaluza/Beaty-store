import { products } from "./components/Products.js";
import { categories } from "./components/Categories.js";
import { productsByCategory } from "./components/ProductsBy.js";
import { selectDOM } from "./DOM.js";

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

// function createUI (data) {
//     data.forEach(item => {
//     productsDOM.innerHTML +=
//         `<div class="products-item">
//         <div class="products-title">${item.title}</div>
//         <div><img class="product-photo" src="${item.image}" alt="product item"></div>
//         <div class="products-price">${item.price} $</div>
//         </div>`
//     })
// }

// function getProducts () {
//     fetch('https://fakestoreapi.com/products')
//     .then(res => res.json())
//     .then(data => createUI (data))
//     .catch((err)=>console.log(err))
// }

// getProducts = async() => {
//     try {
//         let result = await fetch(BASE_URL);
//         let data = await result.json();
//         createUI (data)
//     } catch (err) {
//         console.log('Wooops!!', err.message)
//     }
// }

// function getCategories () {
// fetch(BASE_URL + '/categories')
//     .then(res=>res.json())
//     .then(categories => 
//         categories.forEach(category => {
//             const opt = document.createElement('option');
//             opt.innerHTML = category;
//             selectDOM.appendChild(opt)
//         }))
//     .catch((err) => console.log(err))
// }

// function getProductsByCategory (value) {
//     fetch(`${BASE_URL}/category/${value}`)
//     .then(res=>res.json())
//     .then(data => {
//         productsDOM.innerHTML = '';
//         createUI (data)
//     })
//     .catch((err) => console.log(err)); 
// }