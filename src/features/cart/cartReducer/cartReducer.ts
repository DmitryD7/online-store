import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit"
import {v1} from "uuid";
import {CartItemsType, CartItemType} from "../cartItemsTypes";

const initialState = {
    cartItems: [
        {
            id: v1(),
            title: 'Car',
            description: 'toy for children',
            price: 50,
            itemImage: "https://cdn.shopify.com/s/files/1/0049/3732/products/5_900x.jpg?v=1334936803",
            count: 1,
        },
        {
            id: v1(),
            title: 'Security camera',
            description: 'wireless smart home camera',
            price: 150,
            itemImage: 'https://pro.sony/s3/2017/09/07145637/Cateogry-product-Imagery_Video-Security.jpg',
            count: 1,
        },
    ] as CartItemsType,
    totalPrice: 0
}

export const calculateTotalPrice = createAsyncThunk<void, CartItemsType>('cart/calculateTotalPrice', async (param, thunkAPI) => {
    let totalPrice = 0
    await param.forEach(elem => {
        totalPrice += elem.price * elem.count
    })
    thunkAPI.dispatch(setTotalPrice({totalPrice}))
})

export const slice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        addItemToCart(state, action: PayloadAction<{ item: CartItemType }>) {
            state.cartItems.push({...action.payload.item})
        },
        removeItem(state, action: PayloadAction<{ id: string }>) {
            const index = state.cartItems.findIndex(item => item.id === action.payload.id)
            state.cartItems.splice(index, 1)
        },
        increaseCount(state, action: PayloadAction<{ id: string }>) {
            const index = state.cartItems.findIndex(item => item.id === action.payload.id)
            state.cartItems[index].count++
        },
        decreaseCount(state, action: PayloadAction<{ id: string }>) {
            const index = state.cartItems.findIndex(item => item.id === action.payload.id)
            if (state.cartItems[index].count > 1) {
                state.cartItems[index].count--
            }
        },
        setTotalPrice(state, action: PayloadAction<{ totalPrice: number }>) {
            state.totalPrice = action.payload.totalPrice
        }
    }
})
export const {addItemToCart, removeItem, increaseCount, decreaseCount, setTotalPrice} = slice.actions

export type InitialStateType = typeof initialState