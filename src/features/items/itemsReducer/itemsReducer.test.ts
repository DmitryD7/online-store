import {ItemsType} from "../itemsTypes";
import {slice} from "./itemsReducer";

let startState: ItemsType
const {reducer: itemsReducer} = slice
const {changeStatus} = slice.actions

beforeEach(() => {
    startState = [
        {
            id: '1',
            title: 'Car',
            description: 'toy for children',
            price: 50,
            itemImage: '',
            isAdded: false,
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

test('correct item status should be set', () => {
    const endState = itemsReducer (startState, changeStatus({isAdded: true, id: '2'}))

    expect(endState[1].isAdded).toBeTruthy()
})