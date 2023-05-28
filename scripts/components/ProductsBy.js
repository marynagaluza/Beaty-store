import { BASE_URL } from '../API.js';
import { createUI } from './UI.js';

const getProductsByCategory = async (value) => {
    try {
        let result = await fetch(`${BASE_URL}/category/${value}`);
        let data = await result.json();
        createUI (data);
    } catch (err) {
        console.log('Wooops!!', err.message);
    }
}

export { getProductsByCategory }