import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Card, List } from 'antd';
import {filterTodos} from '../../store/todosAction';



const AllProjects = () => {
  const dispatch = useDispatch();
    const Projects = useSelector(state => state.projects.project);


    const filterTodosHandler = (projectName) => {
      
      dispatch(filterTodos(projectName));
    }
    useEffect(() => {
      const filterTodosHandler = (projectName) => {
      
        dispatch(filterTodos(projectName));
      }
      filterTodosHandler()
    }, [filterTodosHandler])
    return (
        <Card  title="All Projects">
        <List itemLayout="horizontal" dataSource={Projects}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta onClick={() => filterTodosHandler(item.projectName)}
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