import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
    name: 'notification',
    initialState: '',
    reducers: {
        setNotification(state, action) {
            switch(action.payload.activity) {
                case 'vote':
                    return `You voted ${action.payload.title}`
                case 'creation':
                    return `You created ${action.payload.title}`
                default: 
                    return ''
            }
        },
        zeroNotification(state, action) {
            return ''
        }
    },
})

export const { setNotification, zeroNotification } = notificationSlice.actions
export default notificationSlice.reducer
