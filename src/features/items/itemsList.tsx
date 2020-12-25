import React, {useEffect} from "react";
import {Item} from "./item/item";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../application/types";
import s from "./itemsList.module.scss"
import {ItemsType} from "./itemsTypes";
import {itemsActions} from "../index";
import {LinearProgress} from "@material-ui/core";

export const ItemsList = (props: ItemsListPropsType) => {
    const items = useSelector<AppRootStateType, ItemsType>(state => state.items)
    const {fetchItems} = itemsActions
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchItems())
    }, [])

    return <div>
        {items.length < 1 && <LinearProgress/>}
        <div className={s.itemsList}>
            {items.map(i => <Item
                key={i.id}
                item={i}
            />)}
        </div>
    </div>
}

type ItemsListPropsType = {}