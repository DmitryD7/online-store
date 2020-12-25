import axios from 'axios'
import {ItemsType} from "../features/items/itemsTypes";

export const itemsAPI = {
    fetchItems() {
        return axios.get<ItemsType>('https://online-store-1600b-default-rtdb.firebaseio.com/items.json')
    }
}