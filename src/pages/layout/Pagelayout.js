import React from 'react';
import { Card, List } from 'antd';

import { useSelector } from 'react-redux';


const Pagelayout = () => {

  const Projects = useSelector(state => state.projects.project);
  
  console.log(Projects);


    return (
   
   <Card  >
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


export default Pagelayout