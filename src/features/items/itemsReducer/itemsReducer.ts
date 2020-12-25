import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit"
import {ItemsType} from "../itemsTypes"
import {itemsAPI} from "../../../api/aplicationAPI";

export const fetchItems = createAsyncThunk<{items: ItemsType}, undefined>('items/fetchItems', async (param, thunkAPI) => {
    try {
        const response = await itemsAPI.fetchItems()
        return {items: response.data}
    } catch (e) {
        throw new Error(e.message)
    }
})

export const slice = createSlice({
    name: 'items',
    initialState: [] as ItemsType,
    reducers: {
        changeStatus(state, action: PayloadAction<{ isAdded: boolean, id: string }>) {
            const index = state.findIndex(tl => tl.id === action.payload.id)
            state[index].isAdded = action.payload.isAdded
        }
    },
    extraReducers: builder => {
        builder.addCase(fetchItems.fulfilled, ((state, action) => {
            return action.payload.items
        }))
    }
})

export const asyncItemsActions = {
    fetchItems
}