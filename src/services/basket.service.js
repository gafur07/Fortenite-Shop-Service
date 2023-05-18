import axios from "axios"
import { API_KEY, API_URL } from "../API/Api"

export const BasketService = {
    async renderBasket() {
        const response = await axios.get(API_URL, {
            headers: {
                "Authorization" : API_KEY
            }
        })
        return response.data.featured
    }
}
