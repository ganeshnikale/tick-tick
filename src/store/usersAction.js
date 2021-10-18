
import {usersSliceAction} from './usersSlice';
export const userLogin = () => {
    console.log('useAction')
    return async (dispatch) => {
        dispatch(usersSliceAction.setUser({userDetails:[{userName: "ganesh", userId: 1}]}))
    }
}