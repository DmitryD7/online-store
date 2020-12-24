import React, {useEffect} from "react";
import {AppBar, IconButton, Toolbar, Typography} from "@material-ui/core";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import StorefrontIcon from '@material-ui/icons/Storefront';
import s from "./header.module.scss"
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../application/types";
import {CartItemsType} from "../cart/cartItemsTypes";
import {calculateTotalPrice} from "../cart/cartReducer/cartReducer";

export const Header = React.memo(() => {
    const dispatch = useDispatch()
    const cartItems = useSelector<AppRootStateType, CartItemsType>(state => state.cart.cartItems)
    const totalPrice = useSelector<AppRootStateType, number>(state => state.cart.totalPrice)

    useEffect(() => {
        dispatch(calculateTotalPrice(cartItems))
    }, [cartItems, dispatch])

    return <div>
        <AppBar position="static" color={"primary"}>
            <Toolbar className={s.toolBar}>
                <IconButton edge="start" className={s.cartButton} color="inherit" aria-label="menu" component={Link}
                            to={'/'}>
                    <StorefrontIcon/>
                    <Typography variant="h6" className={s.title}>
                        Store
                    </Typography>
                </IconButton>
                <IconButton edge="start" className={s.cartButton} color="inherit" aria-label="menu" component={Link}
                            to={'/cart'}>
                    <ShoppingCartIcon/>
                    <Typography variant="h6" className={s.title}>
                        <ins className={s.buttonLabel}>Your Cart</ins>
                        {totalPrice > 0 && <i>{totalPrice}$</i>}
                    </Typography>
                </IconButton>
            </Toolbar>
        </AppBar>
    </div>
})