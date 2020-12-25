import React, {useCallback} from "react";
import s from "./item.module.scss"
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import {ItemType} from "../itemsTypes";
import {useDispatch} from "react-redux";
import DoneIcon from '@material-ui/icons/Done';
import {cartActions, itemsActions} from "../../index";


export const Item = React.memo((props: ItemPropsType) => {
    const dispatch = useDispatch()
    const {itemImage, price, description, title, id, isAdded} = props.item
    const {addItemToCart} = cartActions
    const {updateItemStatus} = itemsActions
    // eslint-disable-next-line
    const cartItem: ItemType = {count: 1, itemImage, price, description, title, id, isAdded}

    const onAddClickHandler = useCallback(() => {
        dispatch(addItemToCart({item: cartItem}))
        dispatch(updateItemStatus({id, isAdded: true}))
    }, [id, cartItem, dispatch])

    return <>
        <Card className={s.item} variant={"elevation"}>
            <CardMedia
                className={s.media}
                image={itemImage}
                title="Store Items"
            />
            <CardContent className={s.content}>
                <Typography gutterBottom variant="h5" component="h2">
                    {title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {description}
                </Typography>
                <Typography variant="body1" color="textPrimary" component="p">
                    {price}$
                </Typography>
            </CardContent>
            <CardActions className={s.actions}>
                <Button size="medium" color="secondary" onClick={onAddClickHandler} disabled={isAdded}>
                    {!isAdded ? <><AddShoppingCartIcon/> Add to Cart</> : <><DoneIcon/> Added to Cart</>}
                </Button>
            </CardActions>
        </Card>
    </>
})

type ItemPropsType = {
    item: ItemType
}