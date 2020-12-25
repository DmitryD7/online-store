import React from "react";
import {Provider} from "react-redux";
import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import {BrowserRouter} from "react-router-dom";
import {AppRootStateType, RootReducerType} from "../../application/types";
import {cartReducer, itemsReducer} from "../../features";
import thunkMiddleware from "redux-thunk";

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
                itemImage: "https://cdn.shopify.com/s/files/1/0049/3732/products/5_900x.jpg?v=1334936803",
                count: 1,
                isAdded: true
            },
            {
                id: '2',
                title: 'Security camera',
                description: 'wireless smart home camera',
                price: 150,
                itemImage: 'https://pro.sony/s3/2017/09/07145637/Cateogry-product-Imagery_Video-Security.jpg',
                count: 4,
                isAdded: true
            },
        ],
        totalPrice: 0
    },
    items: [
        {
            id: '1',
            title: 'Car',
            description: 'toy for children',
            price: 50,
            itemImage: "https://cdn.shopify.com/s/files/1/0049/3732/products/5_900x.jpg?v=1334936803",
            isAdded: false,
            count: 1
        },
        {
            id: '2',
            title: 'Slow Cooker',
            description: 'pressure cooker',
            price: 70,
            itemImage: 'https://images-na.ssl-images-amazon.com/images/I/81-CPV4wwiL._AC_SX569_.jpg',
            isAdded: false,
            count: 1
        },
        {
            id: '3',
            title: 'Security camera',
            description: 'wireless smart home camera',
            price: 150,
            itemImage: 'https://pro.sony/s3/2017/09/07145637/Cateogry-product-Imagery_Video-Security.jpg',
            isAdded: false,
            count: 1
        }
    ]
}

export const storyBookStore = configureStore({
    reducer: rootReducer,
    preloadedState: initialGlobalState,
    middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunkMiddleware)
});

export const ReduxStoreProviderDecorator = (storyFn: any) => {
    return <Provider store={storyBookStore}>
        {storyFn()}
    </Provider>
}
export const BrowserRouterDecorator = (storyFn: any) => {
    return <BrowserRouter>
        {storyFn()}
    </BrowserRouter>
}
