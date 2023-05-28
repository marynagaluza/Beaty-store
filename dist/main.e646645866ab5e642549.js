/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./scripts/API.js":
/*!************************!*\
  !*** ./scripts/API.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BASE_URL: () => (/* binding */ BASE_URL)
/* harmony export */ });
const BASE_URL = 'https://fakestoreapi.com/products';



/***/ }),

/***/ "./scripts/DOM.js":
/*!************************!*\
  !*** ./scripts/DOM.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   basket: () => (/* binding */ basket),
/* harmony export */   oneProductLink: () => (/* binding */ oneProductLink),
/* harmony export */   productsCount: () => (/* binding */ productsCount),
/* harmony export */   productsDOM: () => (/* binding */ productsDOM),
/* harmony export */   selectDOM: () => (/* binding */ selectDOM)
/* harmony export */ });
let productsDOM = document.querySelector('.products__list');
let selectDOM = document.querySelector('.products__category_selection');
let oneProductLink = document.querySelectorAll('.products__item-link')
let productsCount = document.querySelector('.products__count');
// let addProduct = document.querySelector('.product__card_add');
// let deleteProduct = document.querySelector('.product__card_delete');
let basket = document.querySelector('.products__basket');



/***/ }),

/***/ "./scripts/components/Basket.js":
/*!**************************************!*\
  !*** ./scripts/components/Basket.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   showProductsFromBasket: () => (/* binding */ showProductsFromBasket)
/* harmony export */ });
/* harmony import */ var _DOM_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../DOM.js */ "./scripts/DOM.js");


const showProductsFromBasket = () => {
    _DOM_js__WEBPACK_IMPORTED_MODULE_0__.productsDOM.innerHTML = '';
    for (let i = 0; i < localStorage.length; i++) {
        let id = localStorage.key(i);
        let productData = JSON.parse(localStorage.getItem(id));
        _DOM_js__WEBPACK_IMPORTED_MODULE_0__.productsDOM.innerHTML += `<div><div>
        <span>${productData.title}</span>
        <span>Count ${productData.count}</span>
        </div></div>`
    }
}



/***/ }),

/***/ "./scripts/components/Card.js":
/*!************************************!*\
  !*** ./scripts/components/Card.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createCardUI: () => (/* binding */ createCardUI)
/* harmony export */ });
/* harmony import */ var _DOM_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../DOM.js */ "./scripts/DOM.js");
/* harmony import */ var _Basket_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Basket.js */ "./scripts/components/Basket.js");



const createCardUI = (product) => {
    _DOM_js__WEBPACK_IMPORTED_MODULE_0__.productsDOM.innerHTML = '';
    _DOM_js__WEBPACK_IMPORTED_MODULE_0__.productsDOM.innerHTML =
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
    (0,_Basket_js__WEBPACK_IMPORTED_MODULE_1__.showProductsFromBasket)()
})

let deleteProduct = document.querySelector('.product__card_delete');
deleteProduct.addEventListener('click', () => {

    if (currentProduct.count > 0) {
        localStorage.setItem(product.id, JSON.stringify({count: currentProduct.count-=1, title: product.title}))
    }
    if (currentProduct.count < 1){
        localStorage.removeItem
    }
    (0,_Basket_js__WEBPACK_IMPORTED_MODULE_1__.showProductsFromBasket)()
})



/***/ }),

/***/ "./scripts/components/Categories.js":
/*!******************************************!*\
  !*** ./scripts/components/Categories.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getCategories: () => (/* binding */ getCategories)
/* harmony export */ });
/* harmony import */ var _API_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../API.js */ "./scripts/API.js");
/* harmony import */ var _DOM_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../DOM.js */ "./scripts/DOM.js");



const getCategories = async () => {
    try {
        let result = await fetch(_API_js__WEBPACK_IMPORTED_MODULE_0__.BASE_URL + '/categories');
        let categories = await result.json();
        categories.forEach(category => {
            const opt = document.createElement('option');
            opt.innerHTML = category;
            _DOM_js__WEBPACK_IMPORTED_MODULE_1__.selectDOM.appendChild(opt);
    })
    } catch (err) {
    console.log('Wooops!!', err.message);
    }
}



/***/ }),

/***/ "./scripts/components/Products.js":
/*!****************************************!*\
  !*** ./scripts/components/Products.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getProducts: () => (/* binding */ getProducts)
/* harmony export */ });
/* harmony import */ var _API_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../API.js */ "./scripts/API.js");
/* harmony import */ var _UI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UI.js */ "./scripts/components/UI.js");



const getProducts = async () => {
    try {
        let result = await fetch(_API_js__WEBPACK_IMPORTED_MODULE_0__.BASE_URL);
        let data = await result.json();
        (0,_UI_js__WEBPACK_IMPORTED_MODULE_1__.createUI)(data);
    } catch (err) {
    console.log('Wooops!!', err.message);
    }
}



/***/ }),

/***/ "./scripts/components/ProductsBy.js":
/*!******************************************!*\
  !*** ./scripts/components/ProductsBy.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getProductsByCategory: () => (/* binding */ getProductsByCategory)
/* harmony export */ });
/* harmony import */ var _API_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../API.js */ "./scripts/API.js");
/* harmony import */ var _UI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UI.js */ "./scripts/components/UI.js");



const getProductsByCategory = async (value) => {
    try {
        let result = await fetch(`${_API_js__WEBPACK_IMPORTED_MODULE_0__.BASE_URL}/category/${value}`);
        let data = await result.json();
        (0,_UI_js__WEBPACK_IMPORTED_MODULE_1__.createUI) (data);
    } catch (err) {
        console.log('Wooops!!', err.message);
    }
}



/***/ }),

/***/ "./scripts/components/Router.js":
/*!**************************************!*\
  !*** ./scripts/components/Router.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   router: () => (/* binding */ router)
/* harmony export */ });
class Router {
    routes = [];
    constructor () {
        this.listen()
    }

    add = (path, cb) => {
        this.routes.push({path, cb});
        return this;
    }

    getFragment = () => {
        let fragment = '';
        const match = window.location.href.match(/#(.*)$/);
        fragment = match ? match[1] : '';
        return fragment;
    }

    listen = () => {
        clearInterval(this.interval);
        this.interval = setInterval(this.interval, 50);
    }

    interval = () => {
        if (this.current === this.getFragment()) return;
        this.current = this.getFragment();
        this.routes.some(route => {
            const match = this.current.match(route.path)
            if(match) {
                match.shift()
                route.cb(match[0])
            }
            return false;
        })
    }
}

const router = new Router();



/***/ }),

/***/ "./scripts/components/UI.js":
/*!**********************************!*\
  !*** ./scripts/components/UI.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createUI: () => (/* binding */ createUI)
/* harmony export */ });
/* harmony import */ var _DOM_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../DOM.js */ "./scripts/DOM.js");


const createUI = (data) => {
_DOM_js__WEBPACK_IMPORTED_MODULE_0__.productsDOM.innerHTML = '';
data.forEach(item => {
    _DOM_js__WEBPACK_IMPORTED_MODULE_0__.productsDOM.innerHTML +=
        `<article class="products__item" id="${item.id}">
        <div class="products__item-img">
            <img src="${item.image}" alt="product item">
        </div>
        <div class="products__item-info">
            <p class="products__item-price">${item.price} $</p>
            <p class="products__item-title">${item.title}</p>
        </div>
        <a class="products__item-link" href="#/${item.id}">Show more</a>
        </article>`
    })
}



/***/ }),

/***/ "./scripts/components/getBasketCount.js":
/*!**********************************************!*\
  !*** ./scripts/components/getBasketCount.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getBasketCount: () => (/* binding */ getBasketCount)
/* harmony export */ });
/* harmony import */ var _DOM_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../DOM.js */ "./scripts/DOM.js");


const getBasketCount = () => {
    let sumProductsInBasket = 0;
        for (let i = 0; 0<localStorage.length; i++) {
        let key = localStorage.key(i);
        let productObj = JSON.parse(localStorage.getItem(key))
        sumProductsInBasket += +productObj.count
        _DOM_js__WEBPACK_IMPORTED_MODULE_0__.productsCount.innerHTML = sumProductsInBasket
    }
}



/***/ }),

/***/ "./scripts/components/getOneProduct.js":
/*!*********************************************!*\
  !*** ./scripts/components/getOneProduct.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getProductById: () => (/* binding */ getProductById)
/* harmony export */ });
/* harmony import */ var _API_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../API.js */ "./scripts/API.js");
/* harmony import */ var _Card_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Card.js */ "./scripts/components/Card.js");



const getProductById = async (id) => {
    try {
        let res = await fetch(_API_js__WEBPACK_IMPORTED_MODULE_0__.BASE_URL + `/${id}`);
        let oneProduct = await res.json();
        (0,_Card_js__WEBPACK_IMPORTED_MODULE_1__.createCardUI)(oneProduct);
    } catch (err) {
        console.log('Wooops!!', err.message);
    }
}



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./scripts/index.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Products_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Products.js */ "./scripts/components/Products.js");
/* harmony import */ var _components_Categories_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Categories.js */ "./scripts/components/Categories.js");
/* harmony import */ var _components_Card_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Card.js */ "./scripts/components/Card.js");
/* harmony import */ var _components_ProductsBy_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/ProductsBy.js */ "./scripts/components/ProductsBy.js");
/* harmony import */ var _DOM_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DOM.js */ "./scripts/DOM.js");
/* harmony import */ var _components_Router_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Router.js */ "./scripts/components/Router.js");
/* harmony import */ var _components_getOneProduct_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/getOneProduct.js */ "./scripts/components/getOneProduct.js");
/* harmony import */ var _components_Basket_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/Basket.js */ "./scripts/components/Basket.js");
/* harmony import */ var _components_getBasketCount_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/getBasketCount.js */ "./scripts/components/getBasketCount.js");










document.addEventListener('DOMContentLoaded', function() {
    (0,_components_Products_js__WEBPACK_IMPORTED_MODULE_0__.getProducts)();
    (0,_components_Categories_js__WEBPACK_IMPORTED_MODULE_1__.getCategories)();
    (0,_components_getBasketCount_js__WEBPACK_IMPORTED_MODULE_8__.getBasketCount)();
    _DOM_js__WEBPACK_IMPORTED_MODULE_4__.productsCount.addEventListener('click', () => {
    (0,_components_Basket_js__WEBPACK_IMPORTED_MODULE_7__.showProductsFromBasket)();
    });
    if (localStorage.length) {
        (0,_components_getBasketCount_js__WEBPACK_IMPORTED_MODULE_8__.getBasketCount)();
    }
    (0,_components_Basket_js__WEBPACK_IMPORTED_MODULE_7__.showProductsFromBasket)();
})

_DOM_js__WEBPACK_IMPORTED_MODULE_4__.selectDOM.addEventListener('change', function() {
    if (_DOM_js__WEBPACK_IMPORTED_MODULE_4__.selectDOM.value === 'all') { 
        products.getProducts()
    }   else {
        (0,_components_ProductsBy_js__WEBPACK_IMPORTED_MODULE_3__.getProductsByCategory)(_DOM_js__WEBPACK_IMPORTED_MODULE_4__.selectDOM.value)
    }
})

// oneProductLink.forEach(oneProduct => {
//     oneProduct.addEventListener('click', () => {
//         createCardUI();
//     })}
// )


_components_Router_js__WEBPACK_IMPORTED_MODULE_5__.router.add(/card\/(.*)/, (id) => {
    ;(0,_components_getOneProduct_js__WEBPACK_IMPORTED_MODULE_6__.getProductById)(id);
})
})();

/******/ })()
;
//# sourceMappingURL=main.e646645866ab5e642549.js.map