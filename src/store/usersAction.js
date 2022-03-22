
import {usersSliceAction} from './usersSlice';
import { firestore } from '../utils/firebase';

import { signwithGoogle, auth } from '../utils/firebase';
export const userLogin = (userData) => {
    
    return async (dispatch) => {
        dispatch(usersSliceAction.setUser({userDetails:[{userName: "ganesh", userId: 1}]}))
    }
}

export const googleSignIn = (userData) => {
    
    return async (dispatch) => {
        const userStoreRef = firestore.collection('users').doc();
        dispatch(usersSliceAction.setGoogleUser(userData))
    }
}


export const authUser = (authStatus) => {
    return async (dispatch) => {
        dispatch(usersSliceAction.authStatus(authStatus))
    }
}


export const googleLogOut = (logoutState) => {
    
    return async (dispatch) => {
        dispatch(usersSliceAction.signOut(logoutState))
    }
}