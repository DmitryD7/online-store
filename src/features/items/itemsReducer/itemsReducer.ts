import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import {ItemsType} from "../itemsTypes"
import {itemsAPI} from "../../../api/aplicationAPI";

const fetchItems = createAsyncThunk<{ items: ItemsType }, undefined>('items/fetchItems', async () => {
    try {
        const response = await itemsAPI.fetchItems()
        return {items: response.data}
    } catch (e) {
        throw new Error(e.message)
    }
})

const updateItemStatus = createAsyncThunk<{ id: string, isAdded: boolean }, { id: string, isAdded: boolean }>('items/updateItemStatus', async (param) => {
    try {
        const response = await itemsAPI.changeItemStatus(param.id, param.isAdded)
        return {id: param.id, isAdded: param.isAdded}
    } catch (e) {
        throw new Error(e.message)
    }
})

export const slice = createSlice({
    name: 'items',
    initialState: [] as ItemsType,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchItems.fulfilled, ((state, action) => {
            return action.payload.items
        }))
        builder.addCase(updateItemStatus.fulfilled, (state, action) => {
            const index = state.findIndex(tl => tl.id === action.payload.id)
            state[index].isAdded = action.payload.isAdded
        })
    }
})

export const asyncItemsActions = {
    fetchItems,
    updateItemStatus
}