import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import {ItemsType} from "../itemsTypes"
import {v1} from "uuid";

const initialState = [
    {
        id: v1(),
        title: 'Car',
        description: 'toy for children',
        price: 50,
        itemImage: "https://cdn.shopify.com/s/files/1/0049/3732/products/5_900x.jpg?v=1334936803",
        isAdded: false
    },
    {
        id: v1(),
        title: 'Slow Cooker',
        description: 'pressure cooker',
        price: 70,
        itemImage: 'https://images-na.ssl-images-amazon.com/images/I/81-CPV4wwiL._AC_SX569_.jpg',
        isAdded: false
    },
    {
        id: v1(),
        title: 'Security camera',
        description: 'wireless smart home camera',
        price: 150,
        itemImage: 'https://pro.sony/s3/2017/09/07145637/Cateogry-product-Imagery_Video-Security.jpg',
        isAdded: false
    },
] as ItemsType

export const slice = createSlice({
    name: 'items',
    initialState: initialState,
    reducers: {
        changeStatus(state, action: PayloadAction<{ isAdded: boolean, id: string }>) {
            const index = state.findIndex(tl => tl.id === action.payload.id)
            state[index].isAdded = action.payload.isAdded
        }
    }
})

export const {changeStatus} = slice.actions