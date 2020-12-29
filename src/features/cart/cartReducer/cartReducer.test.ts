import {InitialStateType, slice} from "./cartReducer";
import {ItemsType} from "../../items/itemsTypes";

let initialState: InitialStateType
const {reducer: cartReducer} = slice
const {setTotalPrice, decreaseCount, increaseCount, removeItem, addItemToCart} = slice.actions

beforeEach(() => {
    initialState = {
        cartItems: [
            {
                id: '1',
                title: 'Car',
                description: 'toy for children',
                price: 50,
                itemImage: '',
                count: 1,
                isAdded: true
            },
            {
                id: '2',
                title: 'Security camera',
                description: 'wireless smart home camera',
                price: 150,
                itemImage: '',
                count: 4,
                isAdded: true
            },
        ] as ItemsType,
        totalPrice: 0
    }
})

test('correct item should be added to array', () => {
    const newItem = {
        id: '3',
        title: 'Apple',
        description: 'delicious fruit',
        price: 10,
        itemImage: '',
        count: 2,
        isAdded: true
    }
    const endState = cartReducer(initialState, addItemToCart({cartItem: newItem}))

    expect(endState.cartItems.length).toBe(3)
    expect(endState.cartItems[2].title).toBe('Apple')
})
test('correct item should be removed from array', () => {
    const endState = cartReducer(initialState, removeItem({id: '1'}))

    expect(endState.cartItems.length).toBe(1)
    expect(endState.cartItems[0].title).toBe('Security camera')
})
test('items count should be increased', () => {
    const endState = cartReducer(initialState, increaseCount({id: '1'}))

    expect(endState.cartItems[0].count).toBe(2)
})
test('items count should be decreased', () => {
    const endState = cartReducer(initialState, decreaseCount({id: '2'}))

    expect(endState.cartItems[1].count).toBe(3)
})
test('correct total price should be set', () => {
    const endState = cartReducer(initialState, setTotalPrice({totalPrice: 100}))

    expect(endState.totalPrice).toBe(100)
})
