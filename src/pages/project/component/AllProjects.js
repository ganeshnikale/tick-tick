import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {fetchProject} from "../../../store/projectsAction";
import { useSelector } from 'react-redux';
import { Card, List } from 'antd';



const AllProjects = () => {

    const Projects = useSelector(state => state.projects.project);
    
    return (
        <Card  title="All Projects">
     <List itemLayout="horizontal" dataSource={Projects}
     renderItem={item => (
      <List.Item>
        <List.Item.Meta
          title={item.projectName}
          description={item.createAt}
        />
      </List.Item>
    )}>

     </List>
   </Card>
    )
}


export default AllProjects;