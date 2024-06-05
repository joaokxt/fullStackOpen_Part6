import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
    name: 'notification',
    initialState: '',
    reducers: {
        setMessage(state, action) {
            return action.payload
        },
        zeroNotification(state, action) {
            return ''
        }
    },
})

export const { setMessage, zeroNotification } = notificationSlice.actions

export const setNotification = (message, time) => {
    return async dispatch => {
        dispatch(setMessage(message))
        setTimeout(() => {
            dispatch(zeroNotification())
        }, time*1000)
    }
}

export default notificationSlice.reducer
