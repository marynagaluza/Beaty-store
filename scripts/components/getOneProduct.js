import { BASE_URL } from '../API.js';
import { createCardUI } from './Card.js';

const getProductById = async (id) => {
    try {
        let res = await fetch(BASE_URL + `/${id}`);
        let product = await res.json();
        createCardUI(product);
    } catch (err) {
        console.log('Wooops!!', err.message);
    }
}

export { getProductById }