import React from 'react';
import { useSelector } from 'react-redux';



const AllProjects = () => {
    const Projects = useSelector(state => state.projects.project);
    
    
    return (
         Projects.map( x => (<h2>{x.projectName} </h2>))
        
    )
}


export default AllProjects;