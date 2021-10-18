import React, { Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";
import {fetchProject} from "../../store/projectsAction";
import AddProject from "./component/AddProject";
import AllProjects from "./component/AllProjects";

const Projects = () =>{
    const dispatch = useDispatch();

    const projects = dispatch(fetchProject());
   useEffect( () =>{

   }, [projects])

    return(
        <Fragment>
            <AddProject></AddProject>
            <AllProjects></AllProjects>
        </Fragment>
       
    )
}


export default Projects