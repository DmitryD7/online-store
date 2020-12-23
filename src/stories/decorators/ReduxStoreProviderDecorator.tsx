import React from "react";
import {Provider} from "react-redux";
import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import {HashRouter} from "react-router-dom";
import {itemsReducer} from "../../features/items";
import {cartReducer} from "../../features/cart";
import {AppRootStateType, RootReducerType} from "../../application/types";
import {CartItemsType} from "../../features/cart/cartItemsTypes";

const rootReducer: RootReducerType = combineReducers({
    items: itemsReducer,
    cart: cartReducer,
})

const initialGlobalState: AppRootStateType = {
    cart: {
        cartItems: [
            {
                id: '1',
                title: 'Car',
                description: 'toy for children',
                price: 50,
                itemImage: '',
                count: 1,
            },
            {
                id: '2',
                title: 'Security camera',
                description: 'wireless smart home camera',
                price: 150,
                itemImage: '',
                count: 4,
            },
        ] as CartItemsType,
        totalPrice: 0
    },
    items: [
        {
            id: '1',
            title: 'Car',
            description: 'toy for children',
            price: 50,
            itemImage: '',
            isAdded: false
        },
        {
            id: '2',
            title: 'Slow Cooker',
            description: 'pressure cooker',
            price: 70,
            itemImage: '',
            isAdded: false
        },
        {
            id: '3',
            title: 'Security camera',
            description: 'wireless smart home camera',
            price: 150,
            itemImage: '',
            isAdded: false
        },
    ]
}

export const storyBookStore = configureStore({
    reducer: rootReducer,
    preloadedState: initialGlobalState,
    //middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunkMiddleware)
});

export const ReduxStoreProviderDecorator = (storyFn: any) => {
    return <Provider store={storyBookStore}>
        {storyFn()}
    </Provider>
}
export const HashRouterDecorator = (storyFn: any) => {
    return <HashRouter>
        {storyFn()}
    </HashRouter>
}
