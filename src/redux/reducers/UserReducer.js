const INITIAL_STATE = {
    authChecked: false
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return { ...action.payload, authChecked: true }
        case 'LOGIN_ERROR':
            console.log('aut')
            return { authChecked: true }
        default:
            return state
    }
}
