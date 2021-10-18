import React from "react";
import { useSelector } from "react-redux";

const AllTodos = () => {
    const Todos = useSelector( state => state.todos.todos);
    console.log(Todos);

    return (
       <h2>Todos</h2>

        // Projects.map( x => (<h2>{x.projectName} </h2>))
    )
}


export default AllTodos;