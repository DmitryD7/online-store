import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit"
import {ItemsType, ItemType} from "../../items/itemsTypes";

const loadCartItemsState = () => {
    try {
        const serializedState = localStorage.getItem('cartItems');
        if (serializedState === null) {
            return [];
        }
        return JSON.parse(serializedState);
    } catch (e) {
        throw new Error(e.message)
    }
}
export const saveCartItem = (cartItems: ItemsType) => {
    try {
        const serializedState = JSON.stringify(cartItems);
        localStorage.setItem('cartItems', serializedState);
    } catch (e) {
        throw new Error(e.message)
    }
}
export const calculateTotalPrice = createAsyncThunk<void, ItemsType>('cart/calculateTotalPrice', async (param, thunkAPI) => {
    let totalPrice = 0
    await param.forEach(elem => {
        totalPrice += elem.price * elem.count
    })
    thunkAPI.dispatch(slice.actions.setTotalPrice({totalPrice}))
})

/*//Interaction with cart API
export const fetchCartItems = createAsyncThunk<{cartItems: ItemsType}, undefined>('cart/fetchCartItems', async () => {
    try {
        const response = await cartAPI.fetchCartItems()
        return {cartItems: response.data}
    } catch (e) {
        throw new Error(e.message)
    }
})
export const addNewItemToCart = createAsyncThunk<ItemType, { cartItem: ItemType}>('cart/addNewItemToCart', async (param, thunkAPI) => {
    let index = 0
    try {
        const response = await cartAPI.addNewItemToCart(param.cartItem, JSON.stringify(index))
        index++
        return param.cartItem
    } catch (e) {
        throw new Error(e.message)
    }
})
export const removeItemFromCart = createAsyncThunk<{ cartItemId: string }, { cartItem: ItemType, cartItems: ItemsType }>('cart/removeItemFromCart', async (param) => {
    try {
        let index = param.cartItems.indexOf(param.cartItem)
        const response = await cartAPI.removeItemFromCart(JSON.stringify(index))
        return {cartItemId: param.cartItem.id}
    } catch (e) {
        throw new Error(e.message)
    }
})*/


export const slice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: undefined ? [] : loadCartItemsState() as ItemsType,
        totalPrice: 0
    },
    reducers: {
        addItemToCart(state, action: PayloadAction<{ cartItem: ItemType }>) {
            state.cartItems.push({...action.payload.cartItem})
            saveCartItem(state.cartItems)
        },
        removeItem(state, action: PayloadAction<{ id: string }>) {
            const index = state.cartItems.findIndex(item => item.id === action.payload.id)
            state.cartItems.splice(index, 1)
            saveCartItem(state.cartItems)
        },
        increaseCount(state, action: PayloadAction<{ id: string }>) {
            const index = state.cartItems.findIndex(item => item.id === action.payload.id)
            state.cartItems[index].count++
            saveCartItem(state.cartItems)
        },
        decreaseCount(state, action: PayloadAction<{ id: string }>) {
            const index = state.cartItems.findIndex(item => item.id === action.payload.id)
            if (state.cartItems[index].count > 1) {
                state.cartItems[index].count--
            }
            saveCartItem(state.cartItems)
        },
        setTotalPrice(state, action: PayloadAction<{ totalPrice: number }>) {
            state.totalPrice = action.payload.totalPrice
        }
    },
    /*//for async actions
    extraReducers: builder => {
        builder.addCase(fetchCartItems.fulfilled, ((state, action) => {
            state.cartItems = action.payload.cartItems
        }))
        builder.addCase(addNewItemToCart.fulfilled, ((state, action) => {
            state.cartItems.push(action.payload)
        }))
        builder.addCase(removeItemFromCart.fulfilled, ((state, action) => {
            const index = state.cartItems.findIndex(item => item.id === action.payload.cartItemId)
            state.cartItems.splice(index, 1)
        }))
    }*/
})
export const cartItemsActions = {
    calculateTotalPrice, loadCartItemsState
}

export type InitialStateType = {
    cartItems: ItemsType
    totalPrice: number
}