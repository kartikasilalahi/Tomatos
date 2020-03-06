import AsyncStorage from '@react-native-community/async-storage';

export const onInputText = (prop, value) => {
    return {
        type: 'USERNAME',
        payload: {
            prop, value
        }
    }
}

export const onUserEnter = ({ username }) => {
    return async (dispatch) => {
        try {
            dispatch({ type: 'LOADING_LOGIN' })

            await AsyncStorage.setItem('username', username);
            dispatch({
                type: 'LOGIN_SUCCESS',
                payload: { username }
            })
        } catch (err) {
            dispatch({
                type: ' LOGIN_ERROR',
                payload: err.response ? err.response.data.message : err.message
            })
        }
    }
}

export const userEnterCheck = () => {
    return async (dispatch) => {
        try {
            const username = await AsyncStorage.getItem('username');
            if (!username) {
                return dispatch({ type: ' LOGIN_ERROR' })
            }

            dispatch({
                type: 'LOGIN_SUCCESS',
                payload: { username }
            })
        } catch (err) {
            dispatch({ type: ' LOGIN_ERROR' })
        }
    }
}

export const onUserLogout = () => {
    return async (dispatch) => {
        try {
            await AsyncStorage.removeItem('username')
            console.log('masuk')
            dispatch({ type: ' LOGIN_ERROR' })
        } catch (error) {
            console.log('iniii', error)
        }
    }
}