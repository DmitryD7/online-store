import React from 'react';
import {CartItem} from "./cartItem";
import {ReduxStoreProviderDecorator} from "../../../../stories/decorators/ReduxStoreProviderDecorator";
import {Meta} from "@storybook/react";

export default {
    title: 'cartItem Story',
    component: CartItem,
    decorators: [ReduxStoreProviderDecorator]
} as Meta;

const cartItem = {
    id: '1',
    title: 'Car',
    description: 'toy for children',
    price: 50,
    itemImage: 'https://cdn.shopify.com/s/files/1/0049/3732/products/5_900x.jpg?v=1334936803',
    count: 1,
}

export const CartItemBaseExample = () => <CartItem cartItem={cartItem}/>