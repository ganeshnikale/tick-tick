import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
    name: "todoSlice",
    initialState: {todos:[], filterSortedTodos: [],filterBy: null},
    reducers: {
        setTodo(state,action) {
             state.todos = action.payload.todos;
             state.filterSortedTodos = action.payload.todos;
        },
        addTodos(state, action) {
            state.todos.push(action.payload.pushTodos);
        },
        filterTodosReducer(state,action) {
            
            state.filterBy =  action.payload;
            state.filterSortedTodos = state.todos.filter( (x) => {
                return x.projectName == action.payload
            });
        }
        
    }

});


export const todosSliceAction = todosSlice.actions;
export default todosSlice;