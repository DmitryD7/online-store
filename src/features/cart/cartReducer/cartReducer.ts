import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit"
import {ItemsType, ItemType} from "../../items/itemsTypes";
import {cartAPI} from "../../../api/aplicationAPI";

const initialState = {
    cartItems: [] as ItemsType,
    totalPrice: 0
}

export const calculateTotalPrice = createAsyncThunk<void, ItemsType>('cart/calculateTotalPrice', async (param, thunkAPI) => {
    let totalPrice = 0
    await param.forEach(elem => {
        totalPrice += elem.price * elem.count
    })
    thunkAPI.dispatch(setTotalPrice({totalPrice}))
})

export const fetchCartItems = createAsyncThunk<{cartItems: ItemsType}, undefined>('cart/fetchCartItems', async () => {
    try {
        const response = await cartAPI.fetchCartItems()
        return {cartItems: response.data}
    } catch (e) {
        throw new Error(e.message)
    }
})

export const createCartArray = createAsyncThunk('cart/createCartArray', async () => {
    await cartAPI.createCartArray()
})

export const addNewItemToCart = createAsyncThunk<ItemType, { cartItem: ItemType, cartItems: ItemsType}>('cart/addNewItemToCart', async (param, thunkAPI) => {
    try {
        const response = await cartAPI.addNewItemToCart(param.cartItem, JSON.stringify(param.cartItems.length))
        return param.cartItem
    } catch (e) {
        throw new Error(e.message)
    }
})


export const slice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        /*addItemToCart(state, action: PayloadAction<{ item: ItemType }>) {
            state.cartItems.push({...action.payload.item})
        },*/
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
    },
    extraReducers: builder => {
        builder.addCase(fetchCartItems.fulfilled, ((state, action) => {
            state.cartItems = action.payload.cartItems
        }))

        builder.addCase(addNewItemToCart.fulfilled, ((state, action) => {
            state.cartItems.push(action.payload)
        }))
    }
})
export const {removeItem, increaseCount, decreaseCount, setTotalPrice} = slice.actions
export const asyncCartItemsActions = {
    fetchCartItems,
    addNewItemToCart,
    calculateTotalPrice
}

export type InitialStateType = typeof initialState