import React, {useRef} from "react";
import { useDispatch } from "react-redux";
import {AddTodo} from '../../../store/todosAction';
import { useSelector } from "react-redux";
const AddTodos = () => {

    const uid = useSelector(state => state.users.user[0].userId);
    
    const dispatch = useDispatch();
    const AddTodoRef = useRef();

    const AddTodoHandler = (event) => {
        event.preventDefault();
        console.log(AddTodoRef.current.value);
        dispatch(AddTodo())
    }

    return(
        <form >
            <label>Add todos</label>
            <input ref={AddTodoRef} />
            <button onClick={AddTodoHandler}> Add Todo</button>
        </form>
    )

}

export default AddTodos;