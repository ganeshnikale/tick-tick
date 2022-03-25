import React, { Fragment, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import {fetchProject} from "../../store/projectsAction"; 

import AddProject from '../../components/projects/AddProject';
import AllProjects from '../../components/projects/AllProjects';


const Projects = () => {

  const dispatch = useDispatch();
  const Guid = useSelector((state) => state.users.googleuserDetails[0].uid);
  const userAuth = useSelector((state) => state.users.userAuthenticated);
  const Projects = useSelector((state) => state.projects.project);

  useEffect(() => {
    if (userAuth && Guid != undefined) {
      dispatch(fetchProject(Guid));
    }
  }, [userAuth]);
 
  return (
    <Fragment>
      <AddProject></AddProject>
      {Projects.length > 0 ?<AllProjects projects ={Projects}></AllProjects> : 'wait'}
      
    </Fragment>
  );
};

export default Projects;
