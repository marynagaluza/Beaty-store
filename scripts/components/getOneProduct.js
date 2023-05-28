import { BASE_URL } from '../API.js';
import { cardUI } from './Card.js';

const getProductById = async (id) => {
    try {
        let res = await fetch(BASE_URL + `/${id}`);
        let oneProduct = await res.json();
        cardUI.createCardUI(oneProduct);
    } catch (err) {
        console.log('Wooops!!', err.message);
    }
}

export { getProductById }