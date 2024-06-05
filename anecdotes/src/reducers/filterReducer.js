import { createSlice } from "@reduxjs/toolkit"

const filterSlice = createSlice({
    name: 'filter',
    initialState: '',
    reducers: {
        filterSetting(state, action) {
            return action.payload.toUpperCase()
        }
    }
})

export const { filterSetting } = filterSlice.actions
export default filterSlice.reducer