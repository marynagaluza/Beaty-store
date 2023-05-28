import { BASE_URL } from '../API.js';
import { ui } from './UI.js';

const getProducts = async () => {
    try {
        let result = await fetch(BASE_URL);
        let data = await result.json();
        ui.createUI(data);
    } catch (err) {
    console.log('Wooops!!', err.message);
    }
}

export { getProducts }