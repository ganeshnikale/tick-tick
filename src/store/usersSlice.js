import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
    name: "usersSlice",
    initialState: {user:[{userName: "ganesh", userId: 3}], googleuserDetails: [{uid:0}], userNull:false,userAuthenticated: false},
    reducers: {
        setUser(state, action) {
            state.user = action.payload.userDetails
        },
        setGoogleUser(state, action) {
            state.googleuserDetails = action.payload;
        },
        authStatus(state,action) {
            state.userAuthenticated = action.payload
        },
        signOut(state, action) {
            
            state.googleuserDetails = action.payload
        }
    }
});

export const usersSliceAction = usersSlice.actions;

export default usersSlice;