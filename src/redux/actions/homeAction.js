import axios from 'axios';

export const getToHome = () => {
    return async (dispatch) => {
        try {
            const res = await axios.get('https://developers.zomato.com/api/v2.1/search?start=1&count=10&sort=rating', {
                headers: {
                    "user-key": "bffba37814843146fbb005b21562177c"
                }
            })
            // console.log(res.data.restaurants)
            dispatch({
                type: 'LIST',
                payload: res.data.restaurants
            })
        } catch (err) {
            console.log(err)
        }
    }
}
