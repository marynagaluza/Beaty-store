import { productsDOM } from "../DOM.js"

class UI {
    createUI (data) {
    productsDOM.innerHTML = ''
    data.forEach(item => {
        productsDOM.innerHTML +=
            `<article class="goods__item">
            <div><img class="goods__item-photo" src="${item.image}" alt="product item"></div>
            <div class="goods__item-price">${item.price} $</div>
            <div class="goods__item-title">${item.title}</div>
            </article>`
        })
    }
}

let ui = new UI();
export { ui }