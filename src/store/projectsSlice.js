import { createSlice } from "@reduxjs/toolkit";
const projectSlice = createSlice( {
    name: "projectSlice",
    initialState:{project:[]},
    reducers: {
        setProject(state,action) {
           
            state.project = action.payload.project;
        },
        addProject(state, action) {
            console.log(action.payload.projectDetails);
           state.project.push(action.payload.projectDetails);
       
        }
    }
});


export const projectSliceAction = projectSlice.actions;
export default projectSlice;