import axios from 'axios'
import {ItemsType} from "../features/items/itemsTypes";

const instanceApi = axios.create({
    baseURL: 'https://online-store-1600b-default-rtdb.firebaseio.com/'
})

export const itemsAPI = {
    fetchItems() {
        return instanceApi.get<ItemsType>('items.json')
    },
    changeItemStatus(id: string, isAdded: boolean) {
        return instanceApi.put(`items/${id}/isAdded.json`, isAdded)
    }
}