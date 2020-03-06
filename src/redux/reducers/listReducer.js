const INITIAL_STATE = {
    listPost: [],
    loading: true
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'LIST':
            return { listPost: action.payload, loading: false }
        default:
            return state
    }
}