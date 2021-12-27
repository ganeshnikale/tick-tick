import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
    name: "todoSlice",
    initialState: {todos:[]},
    reducers: {
        setTodo(state,action) {
             state.todos = action.payload.todos
            // console.log(state.todos , action.payload.todos)
        },
        addTodos(state, action) {
            state.todos.push(action.payload.pushTodos);
        }
    }

});


export const todosSliceAction = todosSlice.actions;
export default todosSlice;