import React, {useEffect} from "react";
import {AppBar, IconButton, Toolbar, Typography} from "@material-ui/core";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import StorefrontIcon from '@material-ui/icons/Storefront';
import s from "./header.module.scss"
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../application/types";
import {ItemsType} from "../items/itemsTypes";
import {cartActions} from "../index";

export const Header = React.memo(() => {
    const dispatch = useDispatch()
    const cartItems = useSelector<AppRootStateType, ItemsType>(state => state.cart.cartItems)
    const totalPrice = useSelector<AppRootStateType, number>(state => state.cart.totalPrice)
    const {calculateTotalPrice} = cartActions

    useEffect(() => {
        dispatch(calculateTotalPrice(cartItems))
    }, [cartItems, dispatch, calculateTotalPrice])

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