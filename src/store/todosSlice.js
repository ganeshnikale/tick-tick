import { compose, createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
  name: "todoSlice",
  initialState: {
    todos: [],
    filterSortedTodos: [],
    filterBy: null,
    filterByStatus: [],
    taskDetail: [],
  },
  reducers: {
    setTodo(state, action) {
      state.todos = action.payload.todos;
      state.filterSortedTodos = action.payload.todos;

      state.filterByStatus = action.payload.todos.reduce((next, current) => {
        const { status } = current;
        if (!next.hasOwnProperty(status)) {
          return { ...next, [status]:[current] };
        } else {
          return { ...next, ...next[status].push(current) };
        }
      }, {});

    },
    addTodos(state, action) {
      state.todos.push(action.payload.pushTodos);
    },
    filterTodosReducer(state, action) {
      state.filterBy = action.payload;
      state.filterSortedTodos = state.todos.filter((x) => {
        return x.projectName == action.payload;
      });
    },
    filterByStatusReducer(state, action) {},

    taskDetail(state, action) {
      state.taskDetail = state.todos.filter((x) => {
        return x.todoId === action.payload
      });
    }
  },
});

export const todosSliceAction = todosSlice.actions;
export default todosSlice;
