import {asyncCartItemsActions, calculateTotalPrice, slice as cartSlice} from "./cart/cartReducer/cartReducer";
import {asyncItemsActions, slice as itemsSlice} from "./items/itemsReducer/itemsReducer";

const itemsActions = {
    ...asyncItemsActions,
    ...itemsSlice.actions
}

const cartActions = {
    ...cartSlice.actions,
    ...asyncCartItemsActions
}

const itemsReducer = itemsSlice.reducer
const cartReducer = cartSlice.reducer

export {
    itemsActions,
    cartActions,
    itemsReducer,
    cartReducer,
}