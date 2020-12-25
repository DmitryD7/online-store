import React, {useCallback} from "react";
import s from "./cartItem.module.scss"
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import {useDispatch} from "react-redux";
import {ItemType} from "../../../items/itemsTypes";
import {cartActions, itemsActions} from "../../../index";

export const CartItem = React.memo((props: CartItemPropsType) => {
    const dispatch = useDispatch()
    const {id, title, description, price, itemImage, count} = props.cartItem
    const {removeItem, increaseCount, decreaseCount} = cartActions
    const {updateItemStatus} = itemsActions


    const onRemoveItemHandler = useCallback(() => {
        dispatch(updateItemStatus({id, isAdded: false}))
        dispatch(removeItem({id}))
    }, [dispatch, id, removeItem,updateItemStatus])

    const onIncreaseCountHandler = useCallback(() => dispatch(increaseCount({id})), [id, dispatch, increaseCount])
    const onDecreaseCountHandler = useCallback(() => dispatch(decreaseCount({id})), [id, dispatch, decreaseCount])

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
            </CardContent>
            <CardActions className={s.actions}>
                <Button size="small" color="secondary" onClick={onDecreaseCountHandler}>
                    <RemoveIcon/>
                </Button>
                <Typography variant="body1" color="textPrimary" component="p">
                    {count}
                </Typography>
                <Button size="small" color="secondary" onClick={onIncreaseCountHandler}>
                    <AddIcon/>
                </Button>
            </CardActions>
            <div className={s.price}>
                <Typography gutterBottom variant="h6" component="h3">
                    Price: {price}$
                </Typography>
            </div>
            <div className={s.deleteButton}>
                <Button onClick={onRemoveItemHandler}>
                    <DeleteOutlineIcon/>
                </Button>
            </div>
        </Card>
    </>
})

export type CartItemPropsType = {
    cartItem: ItemType
}