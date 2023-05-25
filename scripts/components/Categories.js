import { BASE_URL } from "../API.js";
import { selectDOM } from "../DOM.js";

class Categories {
    getCategories () {
        fetch(BASE_URL + '/categories')
            .then(res=>res.json())
            .then(categories => 
                categories.forEach(category => {
                    const opt = document.createElement('option')
                    opt.innerHTML = category
                    selectDOM.appendChild(opt)
            }))
            .catch((err) => console.log(err))
    }
}

let categories = new Categories ();
export { categories }