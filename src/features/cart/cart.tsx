import React from "react";
import { CartItemsList } from "./cartItemsList/cartItemsList";
import s from "./cart.module.scss"
import {Container} from "@material-ui/core";
import {CustomerData} from "./customerData/customerData";

export const Cart = () => {
    return <div className={s.cart}>
        <Container fixed>
        <h1>Shopping Cart</h1>
            <hr/>
            <div className={s.body}>
                <CartItemsList/>
                <CustomerData/>
            </div>
        </Container>
    </div>
}