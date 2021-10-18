
import React from 'react';
import {projectSliceAction} from './projectsSlice';
import { useSelector } from 'react-redux';
const { v4: uuidv4 } = require('uuid');




export const fetchProject=  () => {
    return async(dispach) => {
        const userID = useSelector(state => state.users.user[0].userId);
        console.log(userID)
        const project = await fetch(`https://ticktick-a750c-default-rtdb.asia-southeast1.firebasedatabase.app/projects/${userID}.json`).then(x => x.json()).then(y => y);
        
        const ProjectList = [];

        for(let id in project) {
            ProjectList.push(project[id])
        }
        dispach(projectSliceAction.setProject({project:ProjectList}));
    }
}


export const addProjects = (projectName) => {
    console.log(projectName);
    let UID = projectName.userId;
    console.log(UID);
    const uuid = uuidv4();
    return async(dispatch) => {
        const addProject = await fetch(`https://ticktick-a750c-default-rtdb.asia-southeast1.firebasedatabase.app/projects/${UID}.json`, 
        {method:"POST",
        header: {'Content-Type': 'application/json'}, 
        body:JSON.stringify(
            {"projectId":uuid, "projectName": projectName.projectName}
            )
    }).then(x => x.json()).then(y => y);
    dispatch(projectSliceAction.addProject({projectDetails:{projectId:uuid, projectName: projectName.projectName, userId: projectName.userId}}))

    }
}

// https://ticktick-a750c-default-rtdb.asia-southeast1.firebasedatabase.app/projects/3