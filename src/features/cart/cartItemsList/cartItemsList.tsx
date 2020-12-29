import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../application/types";
import {CartItem} from "./cartItem/cartItem";
import s from "./cartItemsList.module.scss"
import {ItemsType} from "../../items/itemsTypes";
import {cartActions} from "../../index";
import {loadCartItemsState} from "../cartReducer/cartReducer";

export const CartItemsList = () => {
    const dispatch = useDispatch()
    const cartItems = useSelector<AppRootStateType, ItemsType>(state => state.cart.cartItems)
    const totalPrice = useSelector<AppRootStateType, number>(state => state.cart.totalPrice)
    const {calculateTotalPrice} = cartActions

    useEffect(() => {
        dispatch(calculateTotalPrice(cartItems))
        loadCartItemsState()
    }, [dispatch, loadCartItemsState])

    return <div className={s.cartItemsList}>
        {cartItems && cartItems.map(i => <CartItem
            key={i.id}
            cartItem={i}
        />)}
        <div className={s.totalPrice}><h3>Total: {totalPrice}$</h3></div>
    </div>
}
