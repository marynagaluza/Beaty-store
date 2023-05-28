import { BASE_URL } from '../API.js';
import { selectDOM } from '../DOM.js';

const getCategories = async () => {
    try {
        let result = await fetch(BASE_URL + '/categories');
        let categories = await result.json();
        categories.forEach(category => {
            const opt = document.createElement('option');
            opt.innerHTML = category;
            selectDOM.appendChild(opt);
    })
    } catch (err) {
    console.log('Wooops!!', err.message);
    }
}

export { getCategories }