import { BASE_URL } from "../API.js";
import { cardUI } from "../components/Card.js";

const getProductById = async (id) => {
    let res = await fetch(BASE_URL + `/${id}`)
    let product = await res.json()
    cardUI.createCardUI(product)
}

export { getProductById }