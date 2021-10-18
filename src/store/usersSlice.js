import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
    name: "usersSlice",
    initialState: {user:[{userName: "ganesh", userId: 3}]},
    reducers: {
        setUser(state, action) {
            
            state.user = action.payload.userDetails

        }
    }
});

export const usersSliceAction = usersSlice.actions;

export default usersSlice;