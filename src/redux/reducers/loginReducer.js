const INITIAL_STATE = {
    username: '',
    error: '',
    loading: false
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'USERNAME':
            return { ...state, [action.payload.prop]: action.payload.value }
        case 'LOGIN_ERROR':
            console.log('logout')
            return { ...state, loading: false, error: action.payload }
        case 'LOADING_LOGIN':
            return { ...state, loading: true, error: '' }
        case 'LOGIN_SUCCESS':
            return INITIAL_STATE
        default:
            return state
    }
}