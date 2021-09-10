import { createSlice, configureStore } from '@reduxjs/toolkit'

const totalSlice = createSlice({
    name: 'total',
    initialState: {
        items: []
    },
    reducers: {
        added: (state: any, action) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.items.push(action.payload)
        },
        deleted: (state: any, action) => {
            let newState = state.items.filter((item: { name: string }) => item.name !== (action.payload.name))
            state.items.splice(0, state.items.length, ...newState);
        }
    }
})

export const { added, deleted } = totalSlice.actions

export const store = configureStore({
    reducer: totalSlice.reducer
})

// Can still subscribe to the store