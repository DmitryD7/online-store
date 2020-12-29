import {ItemsType} from "../itemsTypes";
import {slice} from "./itemsReducer";
import {itemsActions} from "../../index";

let startState: ItemsType
const {reducer: itemsReducer} = slice
const {updateItemStatus} = itemsActions

beforeEach(() => {
    startState = [
        {
            id: '1',
            title: 'Car',
            description: 'toy for children',
            price: 50,
            itemImage: '',
            isAdded: true,
            count: 1
        },
        {
            id: '2',
            title: 'Slow Cooker',
            description: 'pressure cooker',
            price: 70,
            itemImage: '',
            isAdded: false,
            count: 1
        },
        {
            id: '3',
            title: 'Security camera',
            description: 'wireless smart home camera',
            price: 150,
            itemImage: '',
            isAdded: false,
            count: 1
        },
    ]
})

test('Truthy item status should be set', () => {
    const endState = itemsReducer (startState, updateItemStatus.fulfilled({id: '2', isAdded: true}, 'requestId', {id: '2', isAdded: true}))

    expect(endState[1].isAdded).toBeTruthy()
})
test('Falsy item status should be set', () => {
    const endState = itemsReducer (startState, updateItemStatus.fulfilled({id: '1', isAdded: false}, 'requestId', {id: '1', isAdded: false}))

    expect(endState[1].isAdded).toBeFalsy()
})