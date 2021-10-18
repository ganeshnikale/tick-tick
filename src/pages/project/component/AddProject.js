import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {addProjects} from "../../../store/projectsAction";


const AddProject = () => {
    const dispatch = useDispatch();

    const user = useSelector(state => state.users.user);
    
    
    const projectName = React.createRef();
    const addProjectHandler = (event) => {
        event.preventDefault();
        dispatch(addProjects({projectName:projectName.current.value, userId: user[0].userId}));

    }
 

    return (
        <form >
            <input type="text" ref={projectName} />
            <button onClick={addProjectHandler}>Add Project</button>
        </form>
    )
}



export default AddProject;