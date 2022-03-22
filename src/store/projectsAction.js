
import React from 'react';
import {projectSliceAction} from './projectsSlice';
import { useSelector } from 'react-redux';
import { firestore, convertCollectionMap } from '../utils/firebase';
const { v4: uuidv4 } = require('uuid');




export const fetchProject=  (userID) => {
    
    return async(dispatch) => {
        let ProjectList = null;

        const projectStoreRef = firestore.collection('projects');
       
        projectStoreRef.where("userId", "==",  userID).onSnapshot( async snapshot => {
             ProjectList = snapshot.docs.map(x => x.data()) ;
            await dispatch(projectSliceAction.setProject({project:ProjectList}));
        });
       
    }
}


export const addProjects = (projectName) => {
    
    let UID = projectName.userId;
    const uuid = uuidv4();
    const date = new Date();
    return async(dispatch) => {
    //     const addProject = await fetch(`https://ticktick-a750c-default-rtdb.asia-southeast1.firebasedatabase.app/projects/${UID}.json`, 
    //     {method:"POST",
    //     header: {'Content-Type': 'application/json'}, 
    //     body:JSON.stringify(
    //         {"projectId":uuid, "projectName": projectName.projectName}
    //         )
    // }).then(x => x.json()).then(y => y);
    const projectStoreRef = firestore.collection('projects').doc();
    await projectStoreRef.set({
        "projectId":uuid, 
        "projectName": projectName.projectName,
        userId: projectName.userId, 
        createAt: date.toISOString(),
    })
    dispatch(projectSliceAction.addProject({projectDetails:{projectId:uuid, projectName: projectName.projectName, userId: projectName.userId}}))

    }
}

// https://ticktick-a750c-default-rtdb.asia-southeast1.firebasedatabase.app/projects/3