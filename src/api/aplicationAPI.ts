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
        return instanceApi.patch(`items/${id}.json`, {isAdded})
    }
}

/*
export const cartAPI = {
    fetchCartItems() {
        return instanceApi.get<ItemsType>('cart/cartItems.json')
    },
    createCartArray() {
        return instanceApi.post(`cart/cartItems.json`, [])
    },
    addNewItemToCart(newCartItem: ItemType, id: string) {
        return instanceApi.patch(`cart/cartItems/${id}.json`, newCartItem)
    },
    removeItemFromCart(id: string) {
        return instanceApi.delete(`cart/cartItems/${id}.json`)
    }
}*/
