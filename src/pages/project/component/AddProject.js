import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {addProjects} from "../../../store/projectsAction";

import { 
    Form,
    Input,
    Button,
   Card
   } from 'antd';


const AddProject = () => {
    const dispatch = useDispatch();

    const user = useSelector(state => state.users.user);
    
    
    const projectName = React.createRef();
    const addProjectHandler = (event) => {
        
        event.preventDefault();
        dispatch(addProjects({projectName:projectName.current.value, userId: user[0].userId}));

    }
 

    return (
        <Card title="Add Project">
            <Form layout="vertical">
                <Form.Item label="Project Name">
                    <Input  ref={projectName} placeholder="Add Project Name"/>
                </Form.Item>

                <Button onClick={addProjectHandler}>Add Project</Button>
            </Form>
        </Card>
    )
}



export default AddProject;