import axios from "axios"
import { API_KEY, API_URL } from "../API/Api"

export const ShopSerivec = {
    async fetchShop() {
        const response = await axios.get(API_URL, {
            headers: {"Authorization" : API_KEY}
        })
        return response.data.specialFeatured
    }
}