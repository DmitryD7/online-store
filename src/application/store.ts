import { combineReducers } from "redux";
import {configureStore} from "@reduxjs/toolkit";
import {itemsReducer} from "../features/items";
import {cartReducer} from "../features/cart";

export const rootReducer = combineReducers({
    items: itemsReducer,
    cart: cartReducer,
})

export const store = configureStore({
    reducer: rootReducer,
})

// @ts-ignore
window.store = store;