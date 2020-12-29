import {ItemsType} from "../items/itemsTypes";

export type CustomerDataType = {
    name: string
    surname: string
    address: string
    email: string
}

export type CartCommonType = {
    cartItems: ItemsType,
    totalPrice: number
}