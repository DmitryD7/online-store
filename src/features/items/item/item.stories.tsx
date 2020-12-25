import React from 'react';
import {Meta} from "@storybook/react";
import {Item} from "./item";
import {ReduxStoreProviderDecorator} from "../../../stories/decorators/ReduxStoreProviderDecorator";
import {ItemType} from "../itemsTypes";

export default {
    title: 'Item Story',
    component: Item,
    decorators: [ReduxStoreProviderDecorator]
} as Meta;

const itemNotAdded = {
    id: '1',
    title: 'Car',
    description: 'toy for children',
    price: 50,
    itemImage: "https://cdn.shopify.com/s/files/1/0049/3732/products/5_900x.jpg?v=1334936803",
    isAdded: false,
    count: 1
} as ItemType

const itemAdded = {
    id: '2',
    title: 'Slow Cooker',
    description: 'pressure cooker',
    price: 70,
    itemImage: 'https://images-na.ssl-images-amazon.com/images/I/81-CPV4wwiL._AC_SX569_.jpg',
    isAdded: true,
    count: 1
} as ItemType


export const ItemBaseExample = () => <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
    <Item item={itemNotAdded}/>
    <Item item={itemAdded}/>
</div>