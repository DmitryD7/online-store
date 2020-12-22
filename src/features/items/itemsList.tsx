import React from "react";
import {Item} from "./item/item";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../application/types";
import {ItemsType} from "./itemsTypes";
import s from "./itemsList.module.scss"

export const ItemsList = (props: ItemsListPropsType) => {
    const items = useSelector<AppRootStateType, ItemsType>(state => state.items)

    return <div className={s.itemsList}>
        {items.map(i => <Item
            key={i.id}
            item={i}
        />)}
    </div>
}

type ItemsListPropsType = {}