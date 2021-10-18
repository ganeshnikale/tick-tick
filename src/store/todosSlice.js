import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
    name: "todoSlice",
    initialState: {todos:[]},
    reducers: {
        setTodo(state,action) {
            console.log(action.payload.todos);
            //state.todos = action.payload.todos
        },
        addTodos(state, action) {
            console.log(action.payload.pushTodos);
            state.todos.push(action.payload.pushTodos);
        }
    }

});


export const todosSliceAction = todosSlice.actions;
export default todosSlice;