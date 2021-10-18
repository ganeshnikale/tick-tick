import React, {Fragment}from "react";
import AddTodos from "./component/addTodos";
import AllTodos from "./component/allTodos";
import { useDispatch } from "react-redux";
import {fetchTodos} from '../../store/todosAction';



const Todos = () => {
    const dispatch = useDispatch();

    const Todos = dispatch(fetchTodos());

    console.log(Todos);

    return (
        <Fragment>

            <AddTodos />
            <AllTodos/>
        </Fragment>
    )
}


export default Todos