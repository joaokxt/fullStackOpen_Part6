const filterReducer = (state = '', action) => {
    switch (action.type) {
        case 'SET_FILTER':
            return action.payload
        default:
            return state
    }
}

export const filterSetting = (filter) => {
    return {
        type: 'SET_FILTER',
        payload: filter.toUpperCase()
    }
}

export default filterReducer