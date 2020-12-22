import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../application/types";
import {CartItem} from "./cartItem/cartItem";
import s from "./cartItemsList.module.scss"
import {CartItemsType} from "../cartItemsTypes";
import {calculateTotalPrice} from "../cartReducer/cartReducer";

export const CartItemsList = () => {
    const dispatch = useDispatch()
    const cartItems = useSelector<AppRootStateType, CartItemsType>(state => state.cart.cartItems)
    const totalPrice = useSelector<AppRootStateType, number>(state => state.cart.totalPrice)

    useEffect(() => {
        dispatch(calculateTotalPrice(cartItems))
    }, [cartItems, dispatch])

    return <div className={s.cartItemsList}>
        {cartItems.map(i => <CartItem
            key={i.id}
            cartItem={i}
        />)}
        <div className={s.totalPrice}><h3>Total: {totalPrice}$</h3></div>
    </div>
}
