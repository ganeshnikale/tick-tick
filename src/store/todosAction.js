import {todosSliceAction} from './todosSlice';
import { useSelector } from 'react-redux';

export const fetchTodos = () => {
    return async(dispatch) => {
        const userID = useSelector(state => state.users.user[0].userId);
        const allTodos = await fetch(`https://ticktick-a750c-default-rtdb.asia-southeast1.firebasedatabase.app/todos/${userID}.json`).then(x => x.json()).then(y => y);
        console.log(allTodos);
        const todosList = [];

        for(let id in allTodos) {
            todosList.push(allTodos[id])
        }
        dispatch(todosSliceAction.setTodo({todos: allTodos}));

    }
}



export const AddTodo = () => {
    return async(dispatch) => {
        const addTodo = fetch(`https://ticktick-a750c-default-rtdb.asia-southeast1.firebasedatabase.app/todos.json`, {
            method: "POST",
            body: JSON.stringify(
                {"projectId": 1, "status": "pending", text: "dkdkdkdkd"}
            )
        });
        dispatch(todosSliceAction.addTodos({pushTodos:{"projectId": 1, "status": "pending", text: "dkdkdkdkd"}}))

    }
}