import { combineReducers } from "redux";
import {configureStore} from "@reduxjs/toolkit";
import {cartReducer, itemsReducer} from "../features";

export const rootReducer = combineReducers({
    items: itemsReducer,
    cart: cartReducer,
})

export const store = configureStore({
    reducer: rootReducer,
})